from flask import Flask, jsonify, request
from db import User, Author, Book, Genre, Rental
from sqlalchemy import insert
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime as date
from werkzeug.security import generate_password_hash


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///library.db'
DB = SQLAlchemy(app)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
    return response

@app.route('/', methods=['GET'])
def get_users():
    users = DB.session.query(User).all()
    user_list = []
    for user in users:
        user_dict = {
            'id': user.id,
            'name': user.name,
            'rentals': user.rental,
        }
        user_list.append(user_dict)
    return jsonify(user_list)

@app.route('/reg', methods=['POST'])
def reg_user():
    data = request.get_json()
    # Добавить логику обработки данных, например, сохранение пользователя в базе данных
    new_user = User(name=data['name'], password=data['password'])
    DB.session.add(new_user)
    DB.session.commit()
    return 'Пользователь успешно зарегистрирован'

@app.route('/auth', methods=['POST'])
def auth_user():
    data = request.get_json()
    
    user = DB.session.query(User).filter_by(name=data['name']).first()
    
    if user:
        if user.password == data['password']:
            # Логика успешной аутентификации
            return 'Пользователь успешно аутентифицирован'
        else:
            return 'Неверный пароль. Попробуйте снова.'
    else:
        return 'Пользователь не найден. Зарегистрируйтесь.'

# Маршрут для получения всех пользователей
@app.route('/books', methods=['GET'])
def get_books():
    books = DB.session.query(Book).all()
    serialized_books = []
    for book in books:
        serialized_books.append({
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'desc': book.description
            # Добавьте другие необходимые атрибуты книги
        })
    return jsonify(serialized_books)



@app.route('/book', methods=['POST'])
def create_book():
    data = request.get_json()
    title = data.get('name')
    author = data.get('author')
    description = data.get('desc')
    
    book = Book(title=title, author=author, description=description)
    DB.session.add(book)
    DB.session.commit()
    
    return jsonify({'message': 'Книга успешно создана'})

@app.route('/book/edit/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.get_json()
    title = data.get('name')
    author = data.get('author')
    description = data.get('desc')
    book = DB.session.query(Book).get(book_id)
    
    if not book:
        return jsonify({'message': 'Книга не найдена'}), 404
    
    book.title = data.get('name', title)
    book.author = data.get('author', author)
    book.description = data.get('desc', description)
    
    DB.session.commit()
    
    return jsonify({'message': 'Информация о книге успешно обновлена'})

@app.route('/book/del/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = DB.session.query(Book).get(book_id)
    if book:
        DB.session.delete(book)
        DB.session.commit()
        return jsonify({'message': 'Книга успешно удалена'})
    else:
        return jsonify({'message': 'Книга не найдена'}, 404)


if __name__ == '__main__':
    with app.app_context():
        DB.create_all()
        app.run(debug=True)
        
