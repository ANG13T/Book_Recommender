import React, {Component} from 'react';
import Book from '../cards/Book.js';
// import './Todos.css'
const Books = ({books}) => {
    const bookList = books.map(book => {

        return(
            <Book key={book.id} bookData={book} />

        )
    });

        return(
            <div className="books">
                <h1>BOOKS</h1>
                {bookList}
            </div>
        )
}

export default Books;