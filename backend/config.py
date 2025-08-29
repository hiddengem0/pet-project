import os

class Config:
    ENC_KEY = os.getenv("ENC_KEY", "encodedkey")
    SQLALCHEMY_DATABASE_URI = "sqlite:///mydatabase.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False # saves memory/improves performance.
