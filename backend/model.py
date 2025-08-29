from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(128), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
        }


