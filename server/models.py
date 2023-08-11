from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from sqlalchemy.orm import validates


from config import db, bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    age = db.Column(db.Integer)

    _password_hash = db.Column(db.String)

    serialize_rules = ('-_password_hash',)

    visits = db.relationship('Visit', back_populates='user', cascade='all, delete-orphan')
    haunted_locations = association_proxy('visits', 'haunted_location')

    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, new_password):
        # self._password_hash = new_password
        #encryption
        byte_object = new_password.encode('utf-8')
        encrypted_hash_object = bcrypt.generate_password_hash(byte_object)
        hash_object = encrypted_hash_object.decode('utf-8')
        self._password_hash = hash_object
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    @validates('username')
    def validate_username(self, key, new_username):
        if type(new_username) is str and len(new_username) >= 3:
            return new_username
        else:
            raise ValueError("Username must be 3 or more characters")
    
    @validates('email')
    def validate_new_email(self, key, new_email):
        if type(new_email) is str and "@" in new_email:
            return new_email
        else:
            raise ValueError("Email is invalid, must include '@'.")
        
    @validates("age")
    def validates_age(self, key, new_age):
        if type(new_age) is int and new_age >= 18:
            return new_age
        else:
            raise ValueError("You must be 18 or over to enter!")
        
class HauntedLocation(db.Model, SerializerMixin):
    __tablename__ = 'haunted_locations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)

    visits = db.relationship('Visit', back_populates='haunted_location', cascade='all, delete-orphan')
    users = association_proxy('visits', 'user')

    @hybrid_property
    def visits_count(self):
        length = len(self.visits)
        return length
class Visit(db.Model, SerializerMixin):
    __tablename__ = 'visits'

    id = db.Column(db.Integer, primary_key=True)
    date=db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    haunted_location_id = db.Column(db.Integer, db.ForeignKey('haunted_locations.id'))

    user = db.relationship('User', back_populates='visits')
    haunted_location = db.relationship('HauntedLocation', back_populates="visits")
    experience = db.relationship('Experience', back_populates='visit', uselist=False)

    serialize_rules = ('-experience.visit', )


class Experience(db.Model, SerializerMixin):
    __tablename__ = 'experiences'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    rating = db.Column(db.Integer)

    visit_id = db.Column(db.Integer, db.ForeignKey('visits.id'))

    visit = db.relationship('Visit', back_populates='experience', uselist=False)

    serialize_rules = ('-visit.experience', '-visit.user', '-visit.haunted_location')

