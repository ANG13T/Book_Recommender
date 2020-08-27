import React, {Component} from 'react';
import axios from 'axios';

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

// import './Todos.css'
class Books extends React.Component {    
    state = {
        loading: true,
        books: []
    }
    componentDidMount() {
        this.state.loading = true;
        let params = window.location.search.split("?categories=")[1];
        let categories = params.split(",");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`)
        .then(function (response) {
            console.log(response.data.items);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render(){
        return (
            <h1>BOOKS</h1>
        );
    }
   
}

export default Books;