import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Calendar from './calendar/Calendar'
import Orders from './orders/Orders'
import BagAdder from './BagAdder/BagAdder'

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="welcome-header">
        <img id="sew-logo" src={require('./SewLogo.png')} />
        <h1> Hey Gladness!</h1>
      </section>

      <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="menu-bar" id="menu-bar-list">

<li><Link to={'/calendar'} className="nav-link"><img id="bagIcon" src={require('./CalendarIcon.png')} height="42" width="42"></img> </Link></li>

<li><Link to={'/orders'} className="nav-link"><img id="calendarIcon" src={require('./BagIcon.png')} height="42" width="42"></img></Link></li>


</ul>
                    
                </nav>

                <hr/>


                <Switch>
                    <Route exact path='/calendar' component={Calendar} />
                    <Route exact path='/orders' component={Orders} />
                </Switch>

            </BrowserRouter>
      
    </div>
  );
}

export default App;
