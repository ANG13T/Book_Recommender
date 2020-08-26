import React from 'react';
import Button from '@material-ui/core/Button';
import Books from './components/layouts/Books.js';
import Searchbar from './components/layouts/Searchbar.js';


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
      searchInput: ""
  }

  searchBarInput = (searchText) => {
    this.state.searchInput = searchText;
  }

  render(){
      return(
          <div className="App">
              <h1 id="title">Todo List</h1>
              <Books books={this.state.books} />
              <Button variant="contained" color="primary">
              Hello World
            </Button>
          </div>

      )
  }
}

export default App;
