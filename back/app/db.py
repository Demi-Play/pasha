from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base

engine = create_engine('sqlite:///instance/library.db', echo=True)
Base = declarative_base()

# Установка соединения с базой данных
conn = engine.connect()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    password = Column(String)

class Author(Base):
    __tablename__ = 'authors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    bio = Column(String)
    avatar = Column(String)

class Book(Base):
    __tablename__ = 'books'
    
    id = Column(Integer, primary_key=True)
    title = Column(String)
    # author_id = Column(Integer, ForeignKey('authors.id'))
    author = Column(String)
    image = Column(String)
    description = Column(String)


class Genre(Base):
    __tablename__ = 'genres'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)

class Rental(Base):
    __tablename__ = 'rentals'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    book_id = Column(Integer, ForeignKey('books.id'))

Base.metadata.create_all(engine)
