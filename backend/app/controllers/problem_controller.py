from flask import jsonify
from app.models.problem_model import Problem

def get_random_problems(subject):
    problems = Problem.get_problems_by_subject(subject)
    if problems:
        return jsonify([{
            'id': p.id,
            'subject': p.subject,
            'question': p.question,
            'options': p.options,
            'correct_answer': p.correct_answer,
            'difficulty': p.difficulty
        } for p in problems]), 200
    return jsonify({"error": "No problems found"}), 404