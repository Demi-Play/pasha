import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Writter() {
    const [book, setBooks] = useState({})
    const [titl, setTitle] = useState('')
    const [authr, setAuthor] = useState('')
    const [desc, setDesc] = useState('')

    const handleCreateBook = () => {
        // Получите данные о книге из состояния book
        // const { title, author, description } = book;

        // Отправьте POST-запрос на сервер
        fetch('http://127.0.0.1:5000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: titl,
                author: authr,
                desc: desc,
            }),
        })
            .then(response => response.text())
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
        <>
            <Container sx={{ width: '400px', backgroundColor: '#90CAF9', padding: '24px', borderRadius: '10px', color: 'white' }} >
                <Typography variant="h9">Здесь вы можете добавлять, удалять и редактировать книги на нашем ресурсе</Typography>
            </Container>
            <form style={{ backgroundColor: 'white', padding: '24px' }}>
                <Typography color='primary' variant='h4'>Создание книги</Typography><br />
                <div>
                    <TextField onChange={(e) => setTitle(e.target.value)} label="Название книги" name='name' color="primary" />
                    <TextField onChange={(e) => setAuthor(e.target.value)} label="Автор" name='author' color="primary" />
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <TextField onChange={(e) => setDesc(e.target.value)} sx={{ marginRight: '100px' }} label="Описание книги" name='desc' color="primary" />
                    <Button onClick={handleCreateBook} variant="contained" color="primary">Сохранить</Button>
                </div>
            </form>
        </>
    )
}
