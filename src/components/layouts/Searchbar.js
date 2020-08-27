import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Searchbar extends React.Component {    
    
    state = {
        bookName: ''
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState({bookName: value})
        this.props.passSearchData(value);
    }

    render(){
        return (
             <TextField id="standard-search" label="Search books" type="search" onChange={this.handleChange.bind(this)}/>
        );
    }
   
}

export default Searchbar;