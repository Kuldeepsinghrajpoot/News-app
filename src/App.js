import './App.css';
import React, { Component } from 'react'
import Navbar from './Conponets/NavBar';
import NewsCompents from './Conponets/NewsCompents';

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
export default class App extends Component {

  name = "hello this is funciton based";
  render() {
    return (
      <>
     
      <Router>
      <Navbar title="News" />
         <Routes>
            <Route path="/business" exact  element={ <NewsCompents title="News" key={'business'} pageSize={4} country={'in'}  category ={'business'}/>} />
            <Route path="/entertainment" exact  element={ <NewsCompents title="News" key={'entertainment'} pageSize={4} country={'in'}  category ={'entertainment'}/>} />
            <Route path="/" exact  element={ <NewsCompents title="News" key={'general'} pageSize={4} country={'in'}  category ={'general'}/>} />
            <Route path="/health" exact  element={ <NewsCompents title="News" key={'health'} pageSize={4} country={'in'}  category ={'health'}/>} />
            <Route path="/science" exact element={ <NewsCompents title="News" key={'science'}  pageSize={4} country={'in'}  category ={'science'}/>} />
            <Route path="/sports" exact element={ <NewsCompents title="News"  key={'sport'} pageSize={4} country={'in'}  category ={'sports'}/>} />
            <Route path="/technology" exact  element={ <NewsCompents title="News" key={'technology'} pageSize={4} country={'in'}  category ={'technology'}/>} />
          </Routes>
      </Router>
      
      </>
    )
  }
}