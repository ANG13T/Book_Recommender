import React from 'react';

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Books from './components/layouts/Books.js';


class App extends React.Component{
  state = {
      books: [
        //name, link, id, image
          {name: "Do Laundry", id: 1},
          {name: "Wash Dog", id:2},
          {name: "Clean House", id:3},
          {name: "Pay Bills", id:4},
          {name: "Go to Gym", id:5}
      ],

  }


  render(){
      return(
        <Router>
          <div className="App">
              {/* <Books books={this.state.books} /> */}

          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/books">
              <Home />
            </Route>
        </Switch>
        </div>
        </Router>

      )
  }
}

export default App;
