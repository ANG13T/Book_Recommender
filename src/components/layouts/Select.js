import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Select extends React.Component {   
    render(){ 
    this.options = ["Fiction", "NonFiction"]

    state = {
        selectedOptions: []
    }

    // handleChange(event) {
    //     this.setState({bookName: event.target.value})
    //     this.props.passSearchData(this.state.bookName);
    // }

    this.items = this.options.map((item) => {
        <h1>{item}</h1>
    })

    
       return (
           <div className="select">
            {this.items}
           </div>
           
       )
    }
   
}

export default Select;