import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Searchbar extends React.Component {        
    render(){
        return (
             <TextField id="standard-search" label="Search field" type="search" />
        
    );
    }
   
}

export default Searchbar;