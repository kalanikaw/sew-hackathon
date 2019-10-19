import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Calendar from './calendar/Calendar'
import Orders from './orders/Orders'

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="welcome-header">
        Hey Gladness
      </section>

      <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <section id="navigation-panel">
                        <ul className="menu-bar" id="menu-bar-list">
                            <li><Link to={'/calendar'} className="nav-link">My Availability</Link></li>
                            <li><Link to={'/orders'} className="nav-link">My Orders</Link></li>
                        </ul>
                    </section>
                    
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
