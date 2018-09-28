import React, { Component } from 'react';
//style
import './app.css';
//Components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Content from '../components/content/content'
// class

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterToggle:false,
      genresFilter:false
    }
  }
  render() {
    return ( 
      <div id="App" className="">
          <Header name='movies'/>
          <Content
          filterToggle    = {this.state.filterToggle}
          filterToggleFn  = {this.filterToggleFn}
          genresFilter    = {this.state.genresFilter}
          genresToggleFN  = {this.genresToggleFN}
          />
          <Footer/>
      </div>
    );
  }

  genresToggleFN = ()=>{
    this.setState({genresFilter:!this.state.genresFilter})
  }
  filterToggleFn = ()=>{
    this.setState({filterToggle:!this.state.filterToggle})
  }
}


