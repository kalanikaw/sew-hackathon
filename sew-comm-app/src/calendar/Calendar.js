import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import './Calendar.css';
function DayCheckbox(props) {
    return (
        <form>
            <label>
                <input name="available" type="checkbox" checked={props.isAvailable}
            onChange={props.handleInputChange}/>
            </label>
        </form>
    )
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayAvail: [true ,false, true, false, false, true, true]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAvailability = this.saveAvailability.bind(this);

        
    }
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

    saveAvailability() {
        console.log('final availabilities', this.state.dayAvail)

        // TODO save these availabilities in database, store by ID of employee

        // TODO onload of app populate state from database



    }

    handleInputChange(i) {

        let days = this.state.dayAvail;
        days[i] = !this.state.dayAvail[i]

        this.setState({
            ...this.state, 
            dayAvail: days
        })
    }
    render() {
        const currentWeek = this.calculateWeek();

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
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
                    days.map((day, index) => 
                    <tr key={day}>
                        <td>{day}</td>
                        <td><DayCheckbox isAvailable={this.state.dayAvail[index]} handleInputChange={i => this.handleInputChange(index)}/></td>

                    </tr>)
                }

            </table>
            <button className="save-button" onClick={() => this.saveAvailability()}>Save</button>
          </div>
      )
  
    }
  }
export default Calendar