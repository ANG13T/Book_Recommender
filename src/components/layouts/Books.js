import React, {Component} from 'react';
import axios from 'axios';
import Book from '../cards/Book';
import Searchbar from './Searchbar';

import '../../styles/Books.css';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

// import './Todos.css'
class Books extends React.Component {    
    state = {
        loading: true,
        books: [],
        renderBooks: []
    }

    setBooks = (items) => {
        let newBooks = this.state.books;
        for(let item of items){
            if(item.volumeInfo.imageLinks){
                newBooks.push(item);
            }
        }
        this.setState({books: newBooks, loading: false, renderBooks: newBooks})
        console.log("done", this.state.renderBooks);
    }

    reroute = () => {
       window.location.href = "http://localhost:3000/";
    }

    setSpecificBooks = (name) => {
        let newSet = [];
        for(let book of this.state.books){
            let bookTitle = book.volumeInfo.title.toString();
            bookTitle = bookTitle.toLowerCase().trim();
            name = name.toString().toLowerCase().trim();
            if(bookTitle.includes(name)){
                newSet.push(book)
            }
        }
        this.setState({renderBooks: newSet})
    }

    componentDidMount() {
        this.state.loading = true;
        console.log(API_KEY);
        let params = window.location.search.split("?categories=")[1];
        let categories = params.split(",");
        let newBooks = [];
        for(let category of categories){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}+inauthor:keyes&key=${API_KEY}`)
            .then((response) => {
                for(let newItem of response.data.items){
                    if(this.state.books.includes(newItem) == false){
                        newBooks.push(newItem);
                    }
                    
                   if(response.data.items.indexOf(newItem) == response.data.items.length - 1){
                    this.setState({loading: false});
                   }
                }
                this.setBooks(newBooks);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
       
    }

    render(){
        return (
            <div className="mainBooks">
                 <h1 onClick={this.reroute}>BOOKSY</h1>
                <Searchbar className="search" passSearchData={this.setSpecificBooks}/>
                <div className="booksDisplay">
                <div className="loader" hidden={this.state.loading == false}></div>
                {this.state.renderBooks.map((book, index) => (
                    <Book key={index} bookData={book}  /> 
                ))}
                </div>
            </div>
            
        );
    }
   
}

export default Books;