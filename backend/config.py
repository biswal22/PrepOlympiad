from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env

class Config:
    MONGO_URI = os.getenv("MONGO_URI")