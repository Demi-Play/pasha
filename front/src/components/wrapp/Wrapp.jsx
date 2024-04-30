import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CatalogComponent from '../catalog/Catalog'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import CardFrame from '../card/CardFrame'
import Reader from '../reader/Reader'
import Writter from '../writter/Writter'
import AuthForm from '../auth/AuthUtils'
import BookEdit from '../bookEdit/BookEdit'

export default function Wrapp() {

  const [page, setPage] = useState(1)
  const [authed, setAuthed] = useState(false)
  const [edit, setEdit] = useState(false)
  const [forEditId, setForEditId] = useState(0)
  const handleData = (pages) => {
    setPage(pages);
  };
  const handleAuth = () => {
    setAuthed(!authed)
  }
  const handleAuthed = (auth) => {
    setAuthed(auth)
  }
  const handleEdit = (editing) => {
    setEdit(editing)
    console.log(edit)
  }

  const handleEditId = (id) => {
    setForEditId(id)
  }

  const [books, setBooks] = useState({});
  const [book, setBook] = useState({})

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/books');
        const data = await response.json();
        setBooks(data); // Просто заменяем данные в состоянии
      } catch (error) {
        console.error('Ошибка при получении данных о книгах:', error);
        // Выполните необходимые действия при возникновении ошибки
      }
    };
  
    getBooks();
  }, []);
  
  const handleEditBook = (booker) => {
    setBook(booker)
  } 

  
  console.log(book)

  return (
    <>
      <Box sx={{
        width: '1200px',
        minHeight: '932px',
        backgroundColor: 'white',
        color: '#2196F3',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px',
        padding: '0px'
      }}>
        <Header pagin={handleData} regin={handleAuth} />
        {(authed === true) ?

          (page == 0) ?
            <CatalogComponent pagin={handleData} data={books} editing={handleEdit} handleEditBook={handleEditBook} handleEditId={handleEditId} edit={edit} />
            : (page == 1) ?
              <Reader />
              :
              (page == 2) ?
                <Writter />
                : 
                (page == 4) ? <BookEdit id={forEditId} data={book}/> : <CardFrame /> :
          



            <AuthForm handleAuthed={handleAuthed} pagin={handleData} />

        }
        <Footer pagin={handleData} />
      </Box>
    </>
  )
}