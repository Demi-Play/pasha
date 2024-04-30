import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from './python.pdf';
import { Box, Button, TextField } from '@mui/material';
import BookFinder from '../bookFinder/BookFinder';

function CardFrame() {
  const [pdflink, setPdflink] = useState(pdf)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const handleFind = () => {
    pdflink == '' ? 
      setPdflink(pdf)
      :
      setPdflink('')
  }
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
 
  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
  }
 
  const previousPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  }
 
  const nextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }
 
  return (
    <div className="app">
      {/* <h4>Display a PDF in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h4> */}
      <BookFinder />
      <div>
        <Document style={{height: '200px', overflow: 'hidden'}}
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {totalPages}</p>
      </div>
      <div>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= totalPages}
          onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CardFrame;
