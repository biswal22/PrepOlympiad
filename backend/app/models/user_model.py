from app import mongo

def get_user(user_id):
    return mongo.db.users.find_one({"userId": user_id})

def update_user_stats(user_id, stats):
    mongo.db.users.update_one({"userId": user_id}, {"$set": stats}, upsert=True)