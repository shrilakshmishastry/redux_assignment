from flask import Blueprint,render_template

withdraw_money=Blueprint('withdraw_money',__name__,template_folder='./../../client')
from .import views
