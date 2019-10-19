import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './calendar.css';
function DayCheckbox() {
    return (
        <form>
            <label>
                <input name="available" type="checkbox"/>
            </label>
        </form>
    )
}
class Calendar extends React.Component {
    render() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
      return (
          <div>
            <h1>Calendar</h1>

            <table calendar-table>
                <tr>
                    {
                        days.map(day => 
                            <th>{day}</th>)
                    }
                </tr>
                <tr>
                    {
                        days.map(day => <td><DayCheckbox/></td>)
                    }
                   
                </tr>
            </table>
          </div>
      )
  
    }
  }
export default Calendar