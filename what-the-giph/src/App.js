import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import GiphField from './components/GiphField/GiphField'
import API from './utils/API'
import RecentBar from './components/RecentBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { giphs: [] };
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount = () =>{
    API.getStartUpGiphs()
      .then((result) =>{
        // console.dir(result.data,{depth:null, color:true})
        this.setState({giphs:result.data.giphs})
      })
  }

  handleSearch = (searchValue) => {
    API.searchGiphs(searchValue)
      .then((result) => {
      // console.log(result)
      this.setState({giphs:result.data})
      })
      .catch(err => { 
        console.log(`there was an error searching for ${searchValue}`,err)
      });
  }
  
  render() {
    let props = {
      giphs:this.state.giphs,
      search:this.handleSearch
    }
    return (
      <>
        <SearchBar className={'header'} {...props} />
        <RecentBar {...props}/>
      </>
    );
  }
}

export default App;
