import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Searchbar extends React.Component {    
    
    state = {
        bookName: ''
    }

    handleChange(event) {
        this.setState({bookName: event.target.value})
        this.props.passSearchData(this.state.bookName);
    }

    render(){
        return (
             <TextField id="standard-search" label="Search books" type="search" value={this.state.bookName} onChange={this.handleChange.bind(this)}/>
        );
    }
   
}

export default Searchbar;