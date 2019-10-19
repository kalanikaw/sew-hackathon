import React from 'react';
// import logo from './logo.svg';
import './Orders.css';

const Order = () => {{
    return (
    <div className="Order">        
        <p> Company Name </p>
        <p> Due by: 20/12/19</p>
        <p> 350 Bags </p>
        <select class="status">
            <option value="complete"> Complete </option>
            <option value ="ontrack">On track </option>
            <option value ="behind"> Behind </option>
        </select>
    </div>
    )
}}

class Orders extends React.Component {
    render(){
        return (
        <div className="Order">   
            <ul>
                <li> <Order/> </li>
            </ul>
        </div>
        )
    }
}
export default Order;