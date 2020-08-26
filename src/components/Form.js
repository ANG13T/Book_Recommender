import React, {Component} from 'react';
import Searchbar from './layouts/Searchbar';

class Form extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };    
    }

    searchBarInput = (searchText) => {
        this.setState({searchInput: searchText});
    }

    render(){
        return (
        <div className="form">
            <h1>FORM</h1>
            <Searchbar passSearchData={this.searchBarInput}/>
            <h1>{this.state.searchInput}</h1>
        </div>
        );
    }

   
   
}

export default Form;