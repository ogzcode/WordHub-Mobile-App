from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
import os
from flask_login import LoginManager, login_user, login_required, current_user, logout_user

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config["SECRET_KEY"] = "lmlmlcgcvu"
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)

from model import User 

@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))

@app.route('/', methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()

        if user:
            return redirect(url_for("login"))

        new_user = User(name=username, email=email, password=password)

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for("login"))

    return render_template("singup.html")

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()

        if not user or user.password != password:
            flash("Try Login again")
            return redirect(url_for("login"))
        
        login_user(user, remember=True)
        return redirect(url_for("home"))
    
    return render_template("login.html")

@app.route('/home')
@login_required
def home():
    return render_template("home.html", name=current_user.name)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for("signup"))
