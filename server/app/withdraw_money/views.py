from flask import request,render_template
from .import withdraw_money

@withdraw_money.route('/withdraw_money')
def withdraw_money():
    
    return render_template('home.html')
