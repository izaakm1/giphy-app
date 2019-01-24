import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import GiphField from './components/GiphField'
import API from './utils/API'

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { giphs: [] };
  }
  componentDidMount = () =>{
    console.log("mounted")
    API.getStartUpGiphs()
      .then((result) =>{
        console.dir(result,{depth:null, color:true})
      })
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      <GiphField />
      </div>
    );
  }
}

export default App;
