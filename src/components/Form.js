import React, { useState } from 'react';
import Searchbar from './layouts/Searchbar';
import Select from './layouts/Select';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


import '../styles/Form.css';



const Form = () => {   

    const [searchInput, setSearchInput] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    let history = useHistory();

    const searchBarInput = (searchText) => {
        setSearchInput(searchText)
    }

    const selectInput = (selectedOpts) => {
        setSelectedOptions(selectedOpts)
    }

    const loadBooks = () => {
        if(searchInput != "" || selectedOptions != []){
            history.push("/books");
        }else{
            alert("Please select or type something.")
        }
    }

        return (
        <div className="form">
            <h1>BOOKSY</h1>
            <Searchbar passSearchData={searchBarInput}/>
            <h1>{searchInput}</h1>
            <Select passSelectData={selectInput}/>
            <Button variant="contained" color="primary" onClick={loadBooks}>
            Search
            </Button>
        </div>
        );
   
}

export default Form;