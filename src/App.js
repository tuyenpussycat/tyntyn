import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import contactUs from './containers/ContactUS';
import post from './containers/Post';
import Footer from './components/Footer';
function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home}></Route>
        <Route path="/contactUs" component={contactUs}></Route>
        <Route path="/post/:postId" component={post}></Route>
        <Footer></Footer>
      </div>
    </Router>


  );
}

export default App;
