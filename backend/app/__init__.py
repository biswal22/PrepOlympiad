from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    # Initialize SQLAlchemy with the Flask app
    db.init_app(app)

    with app.app_context():
        # Create database tables
        db.create_all()

    # Register routes
    from .routes import setup_routes
    setup_routes(app)

    return app