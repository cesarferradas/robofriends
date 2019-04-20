import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    this.setState({ robots: robots});
  }

  onSearchChange(e) {
    this.setState({searchField: e.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;
