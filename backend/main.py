# venv\Scripts\activate
# python main.py
# $env:FLASK_APP = "main" # flask routes
# npm run dev

# TESTER
# TESTPASSWORD

from flask import Flask, request, jsonify 
from flask_cors import CORS 
from werkzeug.security import generate_password_hash, check_password_hash  
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity 
from config import Config 
from model import db, User 

app = Flask(__name__)
CORS(app) # enables app to use cors
app.config.from_object(Config)
db.init_app(app) # initializes SQLAlchemy

app.config["JWT_SECRET_KEY"] = Config.ENC_KEY
jwt = JWTManager(app)

# ~~~ ROUTES ~~~ #

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if User.query.filter_by(username=username).first(): # no overlap of usernames
        return jsonify({"error": "Username already exists"}), 400
    
    hashed_password = generate_password_hash(password) # security
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid username or password"}), 401

  
    access_token = create_access_token(identity=f"{user.id}")
    return jsonify({"message": "Login successful", "token": access_token}), 200 # to be changed

@app.route("/api/profile", methods=["GET"])
@jwt_required()  
def profile():
    current_user_id = get_jwt_identity()

    user = User.query.get(current_user_id)

    return jsonify({"profile": user.to_json()}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all() # checks for database and applies if not

    app.run(debug=True)