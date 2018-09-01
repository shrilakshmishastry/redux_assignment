from flask import Flask,render_template,Blueprint

app=Flask(__name__,static_folder='../../client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='../../client/dist'

from .add_money import add_money as add_money_blueprint
app.register_blueprint(add_money_blueprint)
# route to root
@app.route('/')
def data():
    return render_template('home.html')

@app.route('/create_account')
def  create_account():
    return render_template('home.html')

@app.route('/add_money_submit')
def add_money_submit():
    return render_template('home.html')

@app.route('/withdraw_money')
def withdraw_money():
    return render_template('home.html')
