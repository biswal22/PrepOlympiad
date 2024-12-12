from flask import jsonify, request
from app.models.user_model import User

def update_user():
    data = request.json
    user_id = data.get("userId")
    stats = data.get("statistics")

    if not user_id or not stats:
        return jsonify({"error": "Invalid data"}), 400

    User.update_user_stats(user_id, stats)
    return jsonify({"message": "User statistics updated"}), 200