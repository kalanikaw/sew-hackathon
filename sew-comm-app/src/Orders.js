import React from 'react';
import logo from './logo.svg';
import './Orders.css';

const Order = () => {{
    return (
    <div className="Order">        
        <div class="order">
            <p> Company Name </p>
            <p> Due by: 20/12/19</p>
            <p> 350 Bags </p>   
            <select class="status">
                <option value="complete"> Complete </option>
                <option value ="ontrack">On track </option>
                <option value ="behind"> Behind </option>
            </select>
        </div>
    </div>
    )
}}
export default Order;