import { Button, TextField } from '@mui/material'
import React from 'react'

export default function BookFinder() {
  return (
    <div style={{margin: '24px', display: 'flex', justifyContent: 'center'}}>
      <TextField sx={{ border: '1px solid #2196F3', borderRadius: '10px', marginBottom: '20px' }} id="filled-basic" type='text' label='https://palchevsky.ru/uploads/books/Python_1.pdf' variant="filled" placeholder='find by link' />
      <Button sx={{height: '56px'}} variant='outlined'>Find</Button>
    </div>
  )
}
