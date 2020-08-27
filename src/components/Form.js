import React, {Component} from 'react';
import Searchbar from './layouts/Searchbar';
import Select from './layouts/Select';
import Button from '@material-ui/core/Button';

import '../styles/Form.css';

class Form extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            selectedOptions: []
        };    
    }

    searchBarInput = (searchText) => {
        this.setState({searchInput: searchText});
    }

    selectInput = (selectedOpts) => {
        // this.setState({selectedOptions: selectedOpts});
        this.setState({selectedOptions: selectedOpts}, () => {
            console.log(this.state.selectedOptions);
        });
    }

    render(){
        return (
        <div className="form">
            <h1>BOOKSY</h1>
            <Searchbar passSearchData={this.searchBarInput}/>
            <h1>{this.state.searchInput}</h1>
            <Select passSelectData={this.selectInput}/>
            <Button variant="contained" color="primary">
            Search
            </Button>
        </div>
        );
    }

   
   
}

export default Form;