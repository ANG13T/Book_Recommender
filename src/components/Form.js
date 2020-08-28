import React, { useState } from 'react';
import Searchbar from './layouts/Searchbar';
import Select from './layouts/Select';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



import '../styles/Form.css';



const Form = () => {   

    // const [searchInput, setSearchInput] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    let history = useHistory();

    const selectInput = (selectedOpts) => {
        setSelectedOptions(selectedOpts)
        console.log(selectedOptions.length)
    }

    const loadBooks = () => {
        let newLink = "/books?categories=";
            
        for(let option of selectedOptions){
            selectedOptions.indexOf(option) != selectedOptions.length - 1 ? newLink += (option + ",") : newLink += option;
        }

        if(selectedOptions.length != 0){
            
            console.log(newLink)
            history.replace(newLink);
        }else{
            alert("Please select or type something.")
        }
    }

        return (
        <div className="form">
            <h1>BOOKSY</h1>
            {/* <Searchbar passSearchData={searchBarInput}/> */}
            {/* <h1>{searchInput}</h1> */}
            <Select passSelectData={selectInput}/>
            <Button variant="contained" color="primary" onClick={loadBooks} disabled={selectedOptions.length == 0}>
            Search
            </Button>
        </div>
        );
   
}



export default Form;