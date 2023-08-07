from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    age = db.Column(db.Integer)

    _password_hash = db.Column(db.String)

    serialize_rules = ('-password_hash')

    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, new_password):
        self._password_hash = new_password
        #encryption
        # byte_object = new_password.encode('utf-8')
        # encrypted_hash_object = bcrypt.generate_password_hash(byte_object)
        # hash_object = encrypted_hash_object.decode('utf-8')
        # self._password_hash = hash_object

class HauntedLocation(db.Model, SerializerMixin):
    __tablename__ = 'haunted_loactions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)

    
        