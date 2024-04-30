import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'

export default function Footer({ pagin }) {

  const handleCatalog = () => {
    pagin(0)
  }
  const handleReader = () => {
    pagin(1)
  }
  const handleWritter = () => {
    pagin(2)
  }
  const handleMyBook = () => {
    pagin(3)
  }

  return (
    <Box sx={{ background: '#2196F3', width: '900px', height: '50px', marginTop: '24px' }}>
      {/* <Box sx={{ background: '#2196F3', width: '900px', height: '100px', marginTop: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
      <ButtonGroup sx={{ height: '36.5px' }} variant="contained" aria-label="Basic button group">
        <Button onClick={handleCatalog}>Каталог</Button>
        <Button onClick={handleReader}>Читателям</Button>
        <Button onClick={handleWritter}>Писателям</Button>
        <Button onClick={handleMyBook}>Мои книги</Button>
      </ButtonGroup>
    </Box>
    // </Box>
  )
}
