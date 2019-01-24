import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import GiphField from './components/GiphField'
import API from './utils/API'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { giphs: [] };
  }
  componentDidMount = () =>{
    console.log("mounted")
    API.getStartUpGiphs()
      .then((result) =>{
        console.dir(result,{depth:null, color:true})
        this.setState({giphs:result.data.returnArr})
      })
  }
  

  render() {
    return (
      <div className="App">
      <SearchBar />
      <GiphField giphs={this.state.giphs} />
      </div>
    );
  }
}

export default App;
