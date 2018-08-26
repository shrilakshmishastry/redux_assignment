from flask import Flask,render_template
app=Flask(__name__,static_folder='../../client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='../../client/dist'

@app.route('/')
def data():
    return render_template('home.html')
