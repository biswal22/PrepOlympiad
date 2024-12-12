from app import create_app
from app.models.problem_model import Problem, db

app = create_app()

problems = {
    "mathematics": [
        {
            "subject": "mathematics",
            "question": "What is 2 + 2?",
            "options": ["2", "3", "4", "5"],
            "correct_answer": "4",
            "difficulty": "easy"
        },
        {
            "subject": "mathematics",
            "question": "Solve: 3x + 5 = 14",
            "options": ["x=3", "x=4", "x=5", "x=6"],
            "correct_answer": "x=3",
            "difficulty": "medium"
        }
    ]
}

def seed_database():
    with app.app_context():
        # Create tables
        db.create_all()
        
        # Clear existing problems
        Problem.query.delete()
        
        # Insert new problems
        for subject in problems:
            for problem in problems[subject]:
                new_problem = Problem(
                    subject=problem['subject'],
                    question=problem['question'],
                    options=problem['options'],
                    correct_answer=problem['correct_answer'],
                    difficulty=problem['difficulty']
                )
                db.session.add(new_problem)
        
        db.session.commit()
        print("Database seeded successfully!")

if __name__ == "__main__":
    seed_database()