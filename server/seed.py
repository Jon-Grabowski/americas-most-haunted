#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, HauntedLocation

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        HauntedLocation.query.delete()


        print("Starting seed...")
        
        #Users Seed
        u1 = User (username = 'bowski', email = 'bowski@mail.com', age = 37, password_hash = 'password')
        u2 = User (username = 'amyfree', email = 'amyfree@mail.com', age = 30, password_hash = 'password')
        u3 = User (username = 'jesspapa', email = 'jesspapa@mail.com', age = 35, password_hash = 'password')
        users = [u1, u2, u3]
        db.session.add_all(users)
        db.session.commit()

        #Haunted Locations Seed
        l1 = HauntedLocation(name = 'House1', location=fake.address(), description = fake.text(), image = 'image_url')
        l2 = HauntedLocation(name = 'House2', location=fake.address(), description = fake.text(), image = 'image_url')
        l3 = HauntedLocation(name = 'House3', location=fake.address(), description = fake.text(), image = 'image_url')
        locations = [l1, l2, l3]
        db.session.add_all(locations)
        db.session.commit()