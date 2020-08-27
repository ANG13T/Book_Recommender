import React, {Component} from 'react';
import axios from 'axios';
import Book from '../cards/Book';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

// import './Todos.css'
class Books extends React.Component {    
    state = {
        loading: true,
        books: []
    }

    setBooks = (items) => {
        let newBooks = [];
        for(let item of items){
            if(item.volumeInfo.imageLinks){
                newBooks.push(item);
            }
        }
        this.setState({books: newBooks, loading: false})
    }

    componentDidMount() {
        this.state.loading = true;
        console.log(API_KEY);
        let params = window.location.search.split("?categories=")[1];
        let categories = params.split(",");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`)
        .then((response) => {
            console.log(response.data);
            this.setBooks(response.data.items);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return (
            <div className="booksDisplay">
            {this.state.books.map((book, index) => (
                <Book key={index} bookData={book}  /> 
            ))}
            </div>
        );
    }
   
}

export default Books;