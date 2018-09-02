from flask import Blueprint,render_template

create_account=Blueprint('create_account',__name__,template_folder='./../../client')

from . import views
