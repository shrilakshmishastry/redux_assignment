from flask import Flask,render_template,Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
app=Flask(__name__,static_folder='../../client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='../../client/dist'

db=SQLAlchemy(app)
app.config.from_pyfile('../instance/config.py')
db.init_app(app)
db.create_all()
migrate=Migrate(app,db)
from app import models
from .models import User_account

data=User_account.query.all()
print(data)
from .add_money import add_money as add_money_blueprint
app.register_blueprint(add_money_blueprint)

from .create_account import create_account as create_account_blueprint
app.register_blueprint(create_account_blueprint)

from .withdraw_money import withdraw_money as withdraw_money_blueprint
app.register_blueprint(withdraw_money_blueprint)

# route to root
@app.route('/')
def data():
    return render_template('home.html')



@app.route('/add_money_submit')
def add_money_submit():
    return render_template('home.html')
