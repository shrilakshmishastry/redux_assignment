from flask import Flask,render_template,Blueprint,request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json
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



@app.route('/add_money_submit',methods=['GET','POST'])
def money_submit():
    if request.method=='POST':
        print(request.is_json)
        data=request.get_json()
        print(data)
        name=data['value']['name']
        password=data['value']['password']
        print(name)
        user = User_account.query.filter_by(full_name=name).first();
        balance=data['value']['balance']
        balance=int(balance)
        print(type(balance))
        print(type(user.balance))
        balance=balance+user.balance
        user.balance=balance
        db.session.commit()
        print(user.balance)
        return json.dumps({'balance':balance,'name':name,'password':password})
    return render_template('home.html')

@app.route('/withdraw_money_submit',methods=['GET','POST'])
def withdraw_money_submit():
    if request.method=='POST':
        print(request.is_json)
        data=request.get_json()
        print(data)
        name=data['value']['name']
        password=data['value']['password']
        print(name)
        user = User_account.query.filter_by(full_name=name).first();
        balance=data['value']['balance']
        balance=int(balance)
        print(type(balance))
        print(type(user.balance))
        balance=user.balance-balance
        user.balance=balance
        db.session.commit()
        print(user.balance)
        return json.dumps({'balance':balance,'name':name,'password':password})
    return render_template('home.html')

@app.route('/add_money_submit',methods=['GET','POST'])
def add_money_submit():
    if request.method=='POST':
        print(request.is_json)
        data=request.get_json()
        print(data)
        name=data['value']['name']
        password=data['value']['password']
        print(name)
        user = User_account.query.filter_by(full_name=name).first();
        balance=data['value']['balance']
        balance=int(balance)
        print(type(balance))
        print(type(user.balance))
        balance=balance+user.balance
        user.balance=balance
        db.session.commit()
        print(user.balance)
        return json.dumps({'balance':balance,'name':name,'password':password})
    return render_template('home.html')
