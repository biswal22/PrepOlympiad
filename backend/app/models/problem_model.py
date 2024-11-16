from app import mongo

def get_problems_by_subject(subject):
    return mongo.db.problems.find_one({"subject": subject})

def insert_problem(data):
    mongo.db.problems.insert_one(data)