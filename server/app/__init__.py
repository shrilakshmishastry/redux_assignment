from flask import Flask,render_template,Blueprint

app=Flask(__name__,static_folder='../../client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='../../client/dist'

from .add_money import add_money as add_money_blueprint
app.register_blueprint(add_money_blueprint)
# route to root
@app.route('/')
def data():
    return render_template('home.html')
