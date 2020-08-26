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
    
    render(){ 

    
       return (
           <div className="select">
            <Paper elevation={3} className="option">
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>

            <Paper elevation={3} className="option">
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>

            <Paper elevation={3} className="option">
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>

            <Paper elevation={3} className="option">
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>

            <Paper elevation={3} className="option">
                    <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className="check"/>
                    <HomeIcon color="primary" className="icon"/>
                    <h2 className="logoName">Fiction</h2>
            </Paper>
           </div>
           
       )
    }
   
}

export default Select;