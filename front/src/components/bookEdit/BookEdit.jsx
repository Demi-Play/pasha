import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function BookEdit({ data, id }) {
  const [titl, setTitle] = useState(data.title || '')
  const [authr, setAuthor] = useState(data.author || '')
  const [desc, setDesc] = useState(data.desc || '')
  // console.log(data)

  const handleDeleteBook = () => {
    // Отправьте DELETE-запрос на сервер
    fetch(`http://127.0.0.1:5000/book/del/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Обработайте ответ от сервера
        console.log(data);
      })
      .catch(error => {
        // Обработайте ошибку
        console.error(error);
      });

  };

  const handleUpdateBook = () => {
    // Получите данные о книге из состояния компонента
    // const { title, author, description } = book;

    // Отправьте PUT-запрос на сервер
    fetch(`http://127.0.0.1:5000/book/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: titl,
        author: authr,
        desc: desc,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Обработайте ответ от сервера
        console.log(data);
      })
      .catch(error => {
        // Обработайте ошибку
        console.error(error);
      });
  };


  return (
    <form style={{ backgroundColor: 'white', padding: '24px' }}>
      <Typography color='primary' variant='h4'>Редактирование книги</Typography><br />
      <div>
        <TextField onChange={(e) => setTitle(e.target.value)} label="Название книги" value={titl} name='name' color="primary" />
        <TextField onChange={(e) => setAuthor(e.target.value)} label="Автор" name='author' value={authr} color="primary" />
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <TextField onChange={(e) => setDesc(e.target.value)} label="Описание книги" value={desc} name='desc' color="primary" />
        <Button variant="contained" color="error" onClick={handleDeleteBook}>Удалить</Button>
        <Button variant="contained" color="success" onClick={handleUpdateBook}>Сохранить</Button>
      </div>
    </form>
  )
}
