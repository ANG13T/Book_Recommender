import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class BookCatSearch extends React.Component {    
    
    state = {
        bookCategory: ''
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState({bookName: value})
        this.props.passBookCategoryData(value);
    }

    render(){
        return (
             <TextField id="standard-search" label="Search book category" type="search" onChange={this.handleChange.bind(this)}/>
        );
    }
   
}

export default BookCatSearch;