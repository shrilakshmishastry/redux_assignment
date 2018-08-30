from flask import Blueprint,render_template

add_money=Blueprint('add_money',__name__,template_folder='./../../client')

from .import views
