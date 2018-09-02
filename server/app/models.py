from flask_login import UserMixin
from app import db

class User_account(UserMixin,db.Model):
    __tablename__ = 'user_account'
    ac_num = db.Column(db.Integer,primary_key=True)
    full_name=db.Column(db.String(30))
    password=db.Column(db.String(30))
    balance=db.Column(db.Integer)
    mobile_num=db.Column(db.Integer)
