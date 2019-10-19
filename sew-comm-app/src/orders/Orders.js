import React from 'react';
// import logo from './logo.svg';
import './Orders.css';

const Order = () => {{
    return (
    <div className="Order">
        <div class="individual-order">        
            <p> Company Name </p>
            <p> Due by: 20/12/19</p>
            <p> 350 Bags </p>
            <select class="status">
                <option value="complete"> Complete </option>
                <option value ="ontrack">On track </option>
                <option value ="behind"> Behind </option>
            </select>
        </div>

        <div class="individual-order">        
        <p> Company Name </p>
        <p> Due by: 21/12/19</p>
        <p> 35 Pouches </p>
        <select class="status">
            <option value="complete"> Complete </option>
            <option value ="ontrack">On track </option>
            <option value ="behind"> Behind </option>
        </select>
        </div>

        <div class="individual-order">        
        <p> Company Name </p>
        <p> Due by: 02/01/20</p>
        <p> 45 Shopping bags </p>
        <select class="status">
            <option value="complete"> Complete </option>
            <option value ="ontrack">On track </option>
            <option value ="behind"> Behind </option>
        </select>
        </div>

        <div class="individual-order">        
        <p> Company Name </p>
        <p> Due by: 24/01/20</p>
        <p> 20 Bags </p>
        <select class="status">
            <option value="complete"> Complete </option>
            <option value ="ontrack">On track </option>
            <option value ="behind"> Behind </option>
        </select>
        </div>

        <div class="individual-order">        
        <p> Company Name </p>
        <p> Due by: 07/02/20</p>
        <p> 200 Bags </p>
        <select class="status">
            <option value="complete"> Complete </option>
            <option value ="ontrack">On track </option>
            <option value ="behind"> Behind </option>
        </select>
        </div>
    </div>

    )
}}

class Orders extends React.Component {
    render(){
        return (
        <div className="Orders">  
            <h1> Orders </h1>
                <ul class="OrderList">
                    <Order/>
                </ul>
        </div>
        )
    }
}
export default Orders;