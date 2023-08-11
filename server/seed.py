#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, HauntedLocation, Visit, Experience

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        HauntedLocation.query.delete()
        Visit.query.delete()
        Experience.query.delete()


        print("Starting seed...")
        

        print("Seeding users...")
        #Users Seed
        u1 = User (username = 'bowski', email = 'bowski@mail.com', age = 37, password_hash = 'password')
        u2 = User (username = 'amyfree', email = 'amyfree@mail.com', age = 30, password_hash = 'password')
        u3 = User (username = 'jesspapa', email = 'jesspapa@mail.com', age = 35, password_hash = 'password')
        users = [u1, u2, u3]
        db.session.add_all(users)
        db.session.commit()

        print("Seeding haunted location...")
        #Haunted Locations Seed
        l1 = HauntedLocation(name = 'Sallie House', location='Atchison, Kansas', description = 'The Sallie House is located in Atchison, Kansas. Built in the mid-1800s, it is said to be haunted by the ghost of a young girl who died in the house while undergoing surgery for appendicitis. The story gained national attention after it was featured on several paranormal television shows. ', image = 'https://lh3.googleusercontent.com/p/AF1QipOougGCEifFtWoBXmhcp6EL22JK3z2GTWg1CcVF=s680-w680-h510')
        l2 = HauntedLocation(name = 'Amityville Horror House', location='Amityville, New York', description = 'On November 13, 1974, Ronald DeFeo Jr. shot and killed six members of his family at 112 Ocean Avenue, a large Dutch Colonial house situated in a suburban neighborhood in Amityville, on the south shore of Long Island, New York. He was convicted of second-degree murder in November 1975 and sentenced to six terms of 25 years to life in prison. DeFeo died in custody in March 2021. In December 1975, George and Kathy Lutz and their three children moved into the house. After 28 days, the Lutzes fled the house, claiming to have been terrorized by paranormal phenomena while living there.', image = 'https://ei.marketwatch.com/Multimedia/2016/06/29/Photos/ZH/MW-EQ389_amityv_20160629095319_ZH.jpg?uuid=d64cff2a-3e00-11e6-89f4-0015c588dfa6')
        l3 = HauntedLocation(name = 'RMS Queen Mary', location='Long Beach, California ', description = 'In the 1930s, the RMS Queen Mary was the ultimate luxury liner: big names of the day like Winston Churchill, Greta Garbo and Clark Gable all journeyed across the Atlantic on her majestic decks. When World War II broke out, the Queen Mary was painted grey and re-dubbed the “Grey Ghost” to ferry soldiers to the frontlines. Today, you can find her docked off the port of Long Beach, CA, where she now serves as a floating hotel. But before you book, beware: the ship’s 1,001 trans-Atlantic crossings of yore were accompanied by 49 recorded deaths. Today, as many as 150 different spirits may still call the Queen Mary home. Some notable residents include a crew member who was crushed to death by a watertight door, a woman dressed in all-white who dances by herself in one of the luxury suites, and several adults and children in 1930s-era garb whose apparitions have been spotted wandering the pool decks. Watch out for drastic temperature changes, slamming doors, knocking, screams, lights flickering and children crying -- all aboard a ship that’s earned its reputation as one of the most haunted structures in America.', image = 'https://longbeach.gov/globalassets/press-releases/media-library/images/press-releases/2022/queen-mary.png')
        l4 = HauntedLocation(name = 'The Ohio State Reformatory', location='Mansfield, Ohio', description = 'The Ohio State Reformatory closed in 1990, but that doesn’t mean it’s entirely empty. The prison, the same location where The Shawshank Redemption was filmed, now holds regular ghost hunts where visitors report hearing shrieks and the sound of doors slamming. The most terrifying part of this prison, however, is the solitary confinement wing; here, people have seen shadowy figures and felt the club of a murdered guard still on patrol. Other haunted sites in the city include the Bissman Building (home of a specter with a top hat and a little girl ghost) and the Renaissance Theatre (where you might hear disembodied laughter and creepy music).', image = 'https://media.timeout.com/images/105828052/750/562/image.jpg')

        locations = [l1, l2, l3, l4]
        db.session.add_all(locations)
        db.session.commit()
        
        print("Seeding visits...")
        #Visit Seed
        v1 = Visit(date = '12/22/2013', user_id = 1, haunted_location_id = 1)
        v2 = Visit(date = '10/13/2015', user_id = 1, haunted_location_id = 2)
        v3 = Visit(date = '10/15/2016', user_id = 2, haunted_location_id = 2)
        v4 = Visit(date = '10/16/2017', user_id = 2, haunted_location_id = 4)
        v5 = Visit(date = '10/21/2018', user_id = 3, haunted_location_id = 1)
        v6 = Visit(date = '10/25/2019', user_id = 3, haunted_location_id = 3)
        v7 = Visit(date = '10/17/2022', user_id = 1, haunted_location_id = 3)

        visits = [v1, v2, v3, v4, v5, v6, v7]
        db.session.add_all(visits)
        db.session.commit()

        print("Seeding experiences...")
        #Experience Seed
        e1 = Experience(body="I was not scared at all", rating=1, visit_id=2)
        e2 = Experience(body="A little scary, but nothing special", rating=2, visit_id=1)
        e3 = Experience(body="I WAS SO SCARED", rating=5, visit_id=7)
        e4 = Experience(body="Meh", rating=2, visit_id=5)
        e5 = Experience(body="HOLY SHIT", rating=5, visit_id=3)
        e6 = Experience(body="Okay, I mean I was scared but...", rating=3, visit_id=4)
        e7 = Experience(body="I was so scared, but I was more scared when watching Supernatural", rating=4, visit_id=6)
        
        experiences = [e1, e2, e3, e4, e5, e6, e7]
        db.session.add_all(experiences)
        db.session.commit()


        print("Done seeding!")