import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogContainer from './HogContainer';


class App extends Component {
  state = {
      hogs: hogs,
      greaseFilter: false,
      sortBy: null
  }

  filterGreased = () => {
    if (this.state.greaseFilter){
    return this.state.hogs.filter(hog => !hog.greased)
    } else {
        return this.state.hogs
    }
  } 

  handleGreaseClick = () => {
    this.setState({greaseFilter: !this.state.greaseFilter})
  }

  sortName = (hogArray) => {
    return hogArray.sort((a, b) => a.name.localeCompare(b.name))
  }

  sortWeight = (hogArray) => {
    return hogArray.sort((a, b) => b.weight - a.weight)
  }

  handleSortNameClick = () => {
    this.setState({sortBy: 'name'})
  }

  handleSortWeightClick = () => {
    this.setState({sortBy: 'weight'})
  }

  render() {
    let filteredHogs = this.filterGreased()

    if (this.state.sortBy == 'name') {
      filteredHogs = this.sortName(filteredHogs)
    } else if (this.state.sortBy == 'weight') {
      filteredHogs = this.sortWeight(filteredHogs)
    }

    return (
      <div className="App">
          < Nav filterGreased={this.handleGreaseClick} sortName={this.handleSortNameClick} sortWeight={this.handleSortWeightClick}/>
          <HogContainer greaseFilter={this.state.greaseFilter} sortBy={this.state.sortBy} hogs={filteredHogs} />

      </div>
    )
  }
}

export default App;
