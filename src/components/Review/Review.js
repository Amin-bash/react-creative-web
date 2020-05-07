import React, { Component } from 'react';
import './style.scss'

export default class Review extends Component {

  state = {
    data: []
  }
  getDate = () => {
    fetch("https://jsonplaceholder.typicode.com/comments/?postId=2")
      .then(response => response.json())
      .then(data => this.setState({data}));
  }

  componentDidMount() {
    this.getDate();
  }
  render() {
    const {data} = this.state;
    const {isOpen} = this.props;

    if (!data) {
      return <div>Loading......</div>
    }

    return (
      <div className={isOpen ? "side-bar-section open" : "side-bar-section closed"}>
      <ul>
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
      </div>
    )
  }
}
