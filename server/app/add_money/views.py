from flask import request,render_template
from .import add_money
import json
from ..models import User_account
# route to add_money
@add_money.route('/add_money',methods=['GET','POST'])
def add():
    if request.method == 'POST':
        print(request.is_json)
        user=request.get_json()
        name=user['value']['name']
        password=user['value']['password']
        user_name=User_account.query.filter_by(full_name=name).first()
        balance=user_name.balance
        user_password=User_account.query.filter_by(password=password).first()
        if((user_name or user_password)==None):
            return json.dumps({'status':'user not exist'})
        else :

            return json.dumps({'balance':balance,'name':name,'password':password})


        return ('hello world')
    return render_template('home.html')
