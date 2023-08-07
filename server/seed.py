#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        print("Starting seed...")
        # Seed code goes here!
        users = []
        u1 = User (username = 'bowski', email = 'bowski@mail.com', age = 37, password_hash = 'password')
        u2 = User (username = 'amyfree', email = 'amyfree@mail.com', age = 30, password_hash = 'password')
        u3 = User (username = 'jesspapa', email = 'jesspapa@mail.com', age = 35, password_hash = 'password')
        db.session.add(u1)
        db.session.add(u2)
        db.session.add(u3)
        db.session.commit()