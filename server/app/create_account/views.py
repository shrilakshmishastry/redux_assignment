from flask import request,render_template
from . import create_account

@create_account.route('/create_account',methods=['GET','POST'])
def create_account():
    if request.method == 'POST':
        print()
        print('this is shrilakshmi')
        return render_template('home.html')
    return render_template('home.html')
