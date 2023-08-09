#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from models import User, HauntedLocation

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

class Users(Resource):

    def post(self):
        data = request.json
        new_user = User(
            name = data['name'],
            email = data['email'],
            age = data['age'],
            password_hash = data['password']
        )

        db.session.add(new_user)
        db.session.commit()

        return make_response(new_user.to_dict(rules = ('-visits', )), 201)

api.add_resource(Users, '/users')

class HauntedLocations(Resource):

    def get(self):
        locations = [loc.to_dict(rules = ('-visits', )) for loc in HauntedLocation.query.all()]
        return make_response(locations, 200)
    
    def post(self):
        data = request.json
        try:
            new_location = HauntedLocation(
                name = data['name'],
                location = data['location'],
                description = data['description'],
                image = data['image']
            )
        except:
            return make_response({'error': 'invalid inputs'}, 422)

        db.session.add(new_location)
        db.session.commit()
        return make_response(new_location.to_dict(rules = ('-visits', )), 201) 




api.add_resource(HauntedLocations, '/haunted_locations')

class HauntedLocationsById(Resource):

    def get(self, id):
        house = HauntedLocation.query.filter_by(id = id).first()
        if house:
            return make_response(house.to_dict(rules = ('-visits', )), 200)
        return make_response({'error: Not Found'}, 404)
    
        

api.add_resource(HauntedLocationsById, '/haunted_locations/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

