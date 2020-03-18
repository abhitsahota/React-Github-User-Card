import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardColumns
} from 'reactstrap';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      name: '',
      url: '',
      profileImg: '',
      bio: '',
      followerCount: '',
      followers: [],
      placeholder: ''
    };
  } // Constructor end bracket

  componentDidMount() {
      axios.get(`https://api.github.com/users/abhitsahota`)
        .then((res) => {
          this.setState({
            name: res.data.name, 
            url: res.data.html_url,
            profileImg: res.data.avatar_url,
            bio: res.data.bio,
            followerCount: res.data.followers
          })
        })
        .catch(err => {
          console.log(err)
        });

        axios.get(`https://api.github.com/users/${this.state.username}/followers`)
        .then((res) => {
          this.setState({
            followers: res.data, 
          })
        })
        .catch(err => {
          console.log(err)
        });
  } // CDU end bracket


handleGetCard = e => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.username}`)
  .then((res) => {
    this.setState({
      placeholder: res.data.login,
      name: res.data.name, 
      url: res.data.html_url,
      profileImg: res.data.avatar_url,
      bio: res.data.bio,
      followerCount: res.data.followers
    })
  })
  .catch(err => {
    console.log(err)
  });

  axios.get(`https://api.github.com/users/${this.state.username}/followers`)
  .then((res) => {
    this.setState({
      followers: res.data, 
    })
  })
  .catch(err => {
    console.log(err)
  });

  this.setState({username: ''})
}

handleChanges = e => {
  this.setState({ username: e.target.value })
};


  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>Github User</h1>
        <input 
          type='text'
          value={this.state.username}
          placeholder={this.state.placeholder}
          onChange={this.handleChanges}
        />
        <button onClick={this.handleGetCard}>Search</button>

        <Card>
        <CardImg top width="30%" src={this.state.profileImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.name}</CardTitle>
          <CardSubtitle>Number of followers: {this.state.followerCount}</CardSubtitle>
          <CardText>{this.state.bio}</CardText>
        </CardBody>
      </Card>

      <CardColumns>
        {this.state.followers.map(follower => {
          return (
            <Card>
            <CardImg top width="30%" src={follower.avatar_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{follower.login}</CardTitle>
              <CardText>{follower.bio}</CardText>
            </CardBody>
          </Card>
          )
        })}
      </CardColumns>

      </div>
  
    ) // Return end parantheses
  } // Render component end bracket
} // App component end bracket

export default App;
