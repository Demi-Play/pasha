import { Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Reader() {
    return (
        <>
            <Container>
                <Typography variant="h3">Добро пожаловать в нашу библиотеку!</Typography>
                <Typography variant="body1">Здесь вы найдете множество интересных книг и статей.</Typography>
                <Button variant="contained" color="primary">Начать чтение</Button>
            </Container>
            <Container sx={{width: '400px', backgroundColor: '#90CAF9', padding: '24px', borderRadius: '10px', color: 'white'}} >
                <Typography variant="h9">Интересный факт: Первая книга на этом сайте - Простой Python. Современный стиль программирования. Билл Любанович</Typography>
            </Container>
        </>
    )
}
