import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: 'abhitsahota',
      name: '',
      url: '',
      profileImg: '',
      bio: ''
    };
  } // Constructor end bracket

  componentDidMount() {
      axios.get(`https://api.github.com/users/${this.state.username}`)
        .then((res) => {
          this.setState({
            name: res.data.name, 
            url: res.data.html_url,
            profileImg: res.data.avatar_url,
            bio: res.data.bio
          })
        })
        .catch(err => {
          console.log(err)
        });
  } // CDU end bracket

  render() {
    return (
      <div>
        <h1>Github User</h1>
        <Card>
        <CardImg top width="50%" src={this.state.profileImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      </div>
  
    ) // Return end parantheses
  } // Render component end bracket
} // App component end bracket

export default App;
