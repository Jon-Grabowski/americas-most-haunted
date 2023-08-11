#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from models import User, HauntedLocation, Visit, Experience
import ipdb

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

class Users(Resource):

    def post(self):
        data = request.get_json()
        try:
            user = User(
            username = data['username'],
            email = data['email'],
            age = data['age'],
            password_hash = data['password']
        )
        except ValueError as e:
            response = make_response({"errors": [str(e)]}, 400)
            return response

        db.session.add(user)
        db.session.commit()

        session['user.id'] = user.id

        return make_response(user.to_dict(rules = ('-visits', )), 201)

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
            return make_response(house.to_dict(rules = ('-visits.haunted_location', '-visits.user.visits', )), 200)
        return make_response({'error: Not Found'}, 404)

api.add_resource(HauntedLocationsById, '/haunted_locations/<int:id>')

class VisitByHouse(Resource):

    def get(self, house_id):
        visits= [visit.to_dict(rules = ('-user', '-haunted_location', '-experience')) for visit in Visit.query.filter_by(haunted_location_id = house_id).all()]
        if visits:
            return make_response(visits, 200)
        return make_response({}, 200)

api.add_resource(VisitByHouse, '/visit_by_house/<int:house_id>')

class Visits(Resource):
    def post(self):
        data = request.json
        try:
            new_visit = Visit(
                user_id = data['user_id'],
                haunted_location_id = data['haunted_location_id'],
                date = data['date']
            )
        except:
            return make_response({'error': 'invalid inputs'}, 422)
        
        db.session.add(new_visit)
        db.session.commit()
        return make_response(new_visit.to_dict(rules = ('-user', '-haunted_location', '-experience')), 201)

api.add_resource(Visits, '/visits')

class Experiences(Resource):
    def get(self):
        experiences = [e.to_dict() for e in Experience.query.all()]
        response = make_response(experiences, 200)
        return response

    def post(self):
        data = request.get_json()

        try:
            new_experience = Experience(
                body=data['body'],
                rating=data['rating'],
                visit_id=data['visit_id'],
            )
        except:
            response = make_response({'error': 'Invalid data.'})
            return response

        db.session.add(new_experience)
        db.session.commit()

        experience_dict = new_experience.to_dict()
        response = make_response(experience_dict, 201)
        return response
api.add_resource(Experiences, '/experiences')

class ExperienceById(Resource):
    def patch(self, id):
        experience = Experience.query.filter_by(id=id).first()

        if not experience:
            response = make_response({'error': 'Experience not found'}, 404)
            return response

        data = request.get_json()

        for attr in data: 
            try:
                setattr(experience, attr, data[attr])
            except ValueError as e:
                response = make_response({"errors": [str(e)]})
                return response
        
        db.session.commit()

        experience_dict = experience.to_dict()
        response = make_response(experience_dict, 202)
        return response
    
    def delete(self, id):
        experience = Experience.query.filter_by(id=id).first()

        if not experience:
            response = make_response({'error': 'Experience not found'}, 404)
            return response
        
        db.session.delete(experience)
        db.session.commit()

        response = make_response({}, 204)
        return response
api.add_resource(ExperienceById, '/experiences/<int:id>')



@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            response = make_response(user.to_dict(rules = ('-visits.user', '-visits.haunted_location', '-visits.experience')), 200)
            return response
        else:
            return make_response({'error': 'name or password incorrect'}, 401)
    except:
        return make_response({'error': 'name or password incorrect'}, 401)

# TO GRAB USER IF IN SESSION
@app.route('/getUser', methods=['GET'])
def getUser():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        response = make_response(user.to_dict(), 200)
        return response
    except:
        return make_response({
            "error": "User not found"
        }, 404)
    
@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response('', 204)

if __name__ == '__main__':
    app.run(port=5555, debug=True)

