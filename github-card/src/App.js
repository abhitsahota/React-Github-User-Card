import React from 'react';
import { Card } from 'reactstrap';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  } // Constructor end bracket

  componentDidMount() {

    const getUsers = () => {
      axios.get()
        .then(users => this.setState({}))
        .catch(err => {
          console.log(err)
        });
  };
  }

  render() {
    return (
      <div>
        <h1>Github User</h1>

      </div>
  
    ) // Return end parantheses
  } // Render component end bracket
} // App component end bracket

export default App;
