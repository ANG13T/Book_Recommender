import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import '../../styles/Select.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
  }));

function HomeIcon(props) {
return (
    <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);
}

class Select extends React.Component {   

    state = {
        selectedOptions: [],
    }

    handleChange = event => {
        event.preventDefault();
        let isChecked = event.target.checked;
        let checkID = event.currentTarget.id;
        if(isChecked){
            this.state.selectedOptions.push(checkID);
        }else{
            for(let i = 0; i < this.state.selectedOptions.length; i++){
                let option = this.state.selectedOptions[i];
                if(checkID == option){
                    this.state.selectedOptions.splice(i, 1);
                }
            }
        }

        console.log(this.state.selectedOptions)
        this.props.passSelectData(this.state.selectedOptions);
    };
    
    render(){ 

    
       return (
           <div className="select">
            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="fiction"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="nonfiction"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">NonFiction</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="fantasy"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fantasy</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="textbooks"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Textbooks</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="drama"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Drama</h2>
            </Paper>
            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="Learning"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Learning</h2>
            </Paper>
            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="biography"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Biography</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="selfhelp"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Self Help</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"
                    onChange={ this.handleChange }
                    id="history"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">History</h2>
            </Paper>

            <Paper elevation={3} className="option" >
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onChange={ this.handleChange }
                    className="check"
                    id="scifi"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Science Fiction</h2>
            </Paper>

           </div>
           
       )
    }
   
}

export default Select;