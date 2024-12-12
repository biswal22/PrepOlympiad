from app import db
import random

class Problem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(50), nullable=False)
    question = db.Column(db.Text, nullable=False)
    options = db.Column(db.JSON, nullable=False)
    correct_answer = db.Column(db.String(255), nullable=False) 
    difficulty = db.Column(db.String(20), nullable=False)

    @staticmethod
    def get_problems_by_subject(subject):
        problems = Problem.query.filter_by(subject=subject).all()
        return random.sample(problems, min(len(problems), 5))