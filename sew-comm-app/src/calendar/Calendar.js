import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './Calendar.css';
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
    calculateWeek() {

        let curr = new Date 
        let week = []

        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i 
            let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
            week.push(day)
        }

        return week;

    }
    render() {
        const currentWeek = this.calculateWeek();

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
      return (
          <div>
            <h1>My Availability for the week</h1>
            <h1>({currentWeek[0]}) - ({currentWeek[currentWeek.length - 1]})</h1>
            <table className="calendar-table">
                <tr>
                    <th className="day">Day</th>
                    <th className="avail">I'm Available</th>

                    
                </tr>
                {
                    days.map(day => 
                    <tr key={day}>
                        <td>{day}</td>
                        <td><DayCheckbox/></td>

                    </tr>)
                }

            </table>
          </div>
      )
  
    }
  }
export default Calendar