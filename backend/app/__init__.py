from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from config import Config

mongo = PyMongo()  # Initialize the PyMongo object here

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    # Initialize PyMongo with the Flask app
    mongo.init_app(app)

    # Register routes
    from .routes import setup_routes
    setup_routes(app)

    return app