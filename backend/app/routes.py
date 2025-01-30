from flask import Blueprint
from app.controllers import problem_controller, user_controller

def setup_routes(app):
    # Problems routes
    @app.route('/api/problems/<string:subject>/random', methods=['GET'])
    def get_random_problems(subject):
        return problem_controller.get_random_problems(subject)

    # User routes
    @app.route('/api/user/update-stats', methods=['POST'])
    def update_user():
        return user_controller.update_user()

    @app.route('/')
    def index():
        return "Welcome to the API", 200