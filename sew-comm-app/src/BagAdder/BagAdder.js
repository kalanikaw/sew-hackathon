import React from 'react';
import './BagAdder.css';


function BagBox() {
    return (
        <div class="form-group">
            <label>
                <img id="calendarIcon" src={require('../BagIcon.png')} height="42" width="42"></img>
            </label>
            <div class="input-group">
                <div class="input-group-btn">
                    <button id="down" class="btn btn-default" onclick=" down('0')">-</button>
                </div>
                <input type="text" id="myNumber" class="form-control input-number" value="1" />
                <div class="input-group-btn">
                    <button id="up" class="btn btn-default" onclick="up('10')">+</button>
                </div>
            </div>
        </div>
    )
}

export default BagBox