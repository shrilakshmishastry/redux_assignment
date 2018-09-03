from flask import request,render_template,redirect
from . import create_account
from ..models import User_account
import json
from app import db

@create_account.route('/create_account',methods=['GET','POST'])
def create_account():
    if request.method == 'POST':
        print(request.is_json)
        user=request.get_json()
        name=user['value']['name']
        password=user['value']['password']
        mobile_num=user['value']['mobile_num']
        user_name=User_account.query.filter_by(full_name=name).first()
        user_password=User_account.query.filter_by(password=password).first()
        user_mobile_num=User_account.query.filter_by(mobile_num=mobile_num).first()
        print((user_name) and (user_password) and (user_mobile_num))
        print(user_password)
        info=(user_name) and (user_password) and (user_mobile_num)
        if (info == None):
            data=User_account(full_name=name,password=password,mobile_num=mobile_num)
            db.session.add(data)
            db.session.commit()
            return json.dumps({'value':'hello world'})
        else:
            return redirect('http://127.0.0.1:5000/')

    return render_template('home.html')
