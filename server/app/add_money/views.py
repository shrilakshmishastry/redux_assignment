from flask import request,render_template
from .import add_money
# route to add_money
@add_money.route('/add_money',methods=['GET','POST'])
def add_money():
    return render_template('home.html')
