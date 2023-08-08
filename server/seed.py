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
        l1 = HauntedLocation(name = 'Sallie House', location='Atchison, Kansas', description = 'The Sallie House is located in Atchison, Kansas. Built in the mid-1800s, it is said to be haunted by the ghost of a young girl who died in the house while undergoing surgery for appendicitis. The story gained national attention after it was featured on several paranormal television shows. ', image = 'https://lh3.googleusercontent.com/p/AF1QipOougGCEifFtWoBXmhcp6EL22JK3z2GTWg1CcVF=s680-w680-h510')
        l2 = HauntedLocation(name = 'Amityville Horror House', location='Amityville, New York', description = 'On November 13, 1974, Ronald DeFeo Jr. shot and killed six members of his family at 112 Ocean Avenue, a large Dutch Colonial house situated in a suburban neighborhood in Amityville, on the south shore of Long Island, New York. He was convicted of second-degree murder in November 1975 and sentenced to six terms of 25 years to life in prison. DeFeo died in custody in March 2021. In December 1975, George and Kathy Lutz and their three children moved into the house. After 28 days, the Lutzes fled the house, claiming to have been terrorized by paranormal phenomena while living there.', image = 'https://ei.marketwatch.com/Multimedia/2016/06/29/Photos/ZH/MW-EQ389_amityv_20160629095319_ZH.jpg?uuid=d64cff2a-3e00-11e6-89f4-0015c588dfa6')
        l3 = HauntedLocation(name = 'RMS Queen Mary', location='Long Beach, California ', description = 'In the 1930s, the RMS Queen Mary was the ultimate luxury liner: big names of the day like Winston Churchill, Greta Garbo and Clark Gable all journeyed across the Atlantic on her majestic decks. When World War II broke out, the Queen Mary was painted grey and re-dubbed the “Grey Ghost” to ferry soldiers to the frontlines. Today, you can find her docked off the port of Long Beach, CA, where she now serves as a floating hotel. But before you book, beware: the ship’s 1,001 trans-Atlantic crossings of yore were accompanied by 49 recorded deaths. Today, as many as 150 different spirits may still call the Queen Mary home. Some notable residents include a crew member who was crushed to death by a watertight door, a woman dressed in all-white who dances by herself in one of the luxury suites, and several adults and children in 1930s-era garb whose apparitions have been spotted wandering the pool decks. Watch out for drastic temperature changes, slamming doors, knocking, screams, lights flickering and children crying -- all aboard a ship that’s earned its reputation as one of the most haunted structures in America.', image = 'https://longbeach.gov/globalassets/press-releases/media-library/images/press-releases/2022/queen-mary.png')
        locations = [l1, l2, l3]
        db.session.add_all(locations)
        db.session.commit()