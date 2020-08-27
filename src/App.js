import React from 'react';

import Books from './components/layouts/Books.js';
import Form from './components/Form.js';


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
          <div className="App">
              <Form />
              {/* <Books books={this.state.books} /> */}
          </div>

      )
  }
}

export default App;
