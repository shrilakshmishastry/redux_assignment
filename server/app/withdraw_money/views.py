from flask import request,render_template
from .import withdraw_money
from ..models import User_account
import json

@withdraw_money.route('/withdraw_money',methods=['GET','POST'])
def withdraw_money():
    if request.method == 'POST':
        print(request.is_json)
        user=request.get_json()
        name=user['value']['name']
        password=user['value']['password']
        user_name=User_account.query.filter_by(full_name=name).first()
        user_password=User_account.query.filter_by(password=password).first()
        if((user_name or user_password)==None):
            return json.dumps({'status':'user not exist'})
        else :
            balance=user_name.balance
            return json.dumps({'balance':balance,'name':name,'password':password})

    return render_template('home.html')
