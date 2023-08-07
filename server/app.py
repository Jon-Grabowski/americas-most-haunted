#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource
from models import User

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

        return make_response(new_user.to_dict(), 201)

api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

