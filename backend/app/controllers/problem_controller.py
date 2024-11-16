from flask import jsonify, request
from app.models.problem_model import get_problems_by_subject, insert_problem

def get_random_problems(subject):
    problems = get_problems_by_subject(subject)
    if problems:
        return jsonify(problems), 200
    return jsonify({"error": "No problems found"}), 404