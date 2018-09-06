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
        print(name)
        print(password)
        user_name=User_account.query.filter_by(full_name=name).first()
        user_password=User_account.query.filter_by(password=password).first()
        print(user_name)
        data=(user_name) and (user_password)
        print(data)
        if (data == None):
            print('hello world')
            return json.dumps({'status':'user not exist'})

        else:
            balance=user_name.balance
            print(balance)
            print('this is shrilakshmi')
            return json.dumps({'balance':balance,'name':name,'password':password})

        return ('hello world')
    return render_template('home.html')
