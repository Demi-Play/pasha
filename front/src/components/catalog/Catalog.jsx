import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';

const CatalogComponent = ({ pagin, data, handleEditId, handleEditBook }) => {
    const handleMyBook = () => {
        pagin(3)
    }
    const handleEdit = (id) => {
        pagin(4);
        handleEditId(id);
        const book = data.find((book) => book.id === id);
        handleEditBook(book);
      };
      



    console.log(data)
    return (
        <>
            <Container sx={{ width: '400px', backgroundColor: '#90CAF9', padding: '24px', borderRadius: '10px', color: 'white' }} >
                <Typography variant="h9">В данном разделе представлен каталог всех имеющихся на данном ресурсе книг и статей</Typography>
            </Container>
            <Grid sx={{ width: '920px', maxHeight: '600px', padding: '0px', overflowY: 'scroll', overflowX: 'hidden' }} container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    {Array.isArray(data) ? (
                        data.map((book) => (
                            <Accordion key={book.id} sx={{ width: '800px', border: '2px solid gray', marginBottom: '12px', marginTop: '0px' }}>
                                <AccordionSummary variant="h5" component="div">
                                    {book.title} - {book.author}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {book.desc}
                                    <br />
                                    <Button onClick={() => {
                                        handleEdit(book.id)
                                    }}>Редактировать</Button>
                                    <Button onClick={handleMyBook}>Перейти к изданию</Button>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    ) : (
                        null
                    )}

                </Grid>
                {/* Добавьте другие элементы каталога здесь */}
            </Grid>
        </>
    );
};

export default CatalogComponent;
