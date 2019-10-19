import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
// import Calendar from './calendar'

import './App.css';


class Calendar extends React.Component {
  render() {
    return (
      <h1>Calendar</h1>
    )

  }
}

function App() {
  return (
    <div className="App">
      <section class="welcome-header">
        Hey Gladness
      </section>

      <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <section id="navigation-panel">
                        <ul className="menu-bar" id="menu-bar-list">
                            <li><Link to={'/calendar'} className="nav-link">Calendar</Link></li>
                            <li><Link to={'/orders'} className="nav-link">My Orders</Link></li>
                        </ul>
                    </section>
                    
                </nav>

                <hr/>


                <Switch>
                    <Route exact path='/calendar' component={Calendar} />
                </Switch>

            </BrowserRouter>
      
    </div>
  );
}

export default App;
