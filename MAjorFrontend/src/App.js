import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import "./style.css";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ArtistDashboard from './components/pages/ArtistDashboard';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>Video upload</h1>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-up' component={SignUp}/>   
          <Route path='/sign-in' component={SignIn}/> 
          <Route path='/ArtistDashboard' component={ArtistDashboard}/>
          <Route path='/OtpForm' component={SignIn}/> 
        </Switch>
      </Router>
    </> 
  );
}

export default App;
