import React, {Component} from 'react';

class Book extends React.Component {        
    render(){
        return (
            <div className="book">
                <h1>{this.props.bookData.name}</h1> 
            </div>
        
    );
    }
   
}

export default Book;