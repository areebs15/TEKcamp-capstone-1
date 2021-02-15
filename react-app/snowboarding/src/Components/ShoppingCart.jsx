import React from 'react';
function ShoppingCart(props) {
    return (
        <div>
            <p> {props.item} Price: ${props.price} 
                <button value={props.keys} id={props.price} onClick={props.handleDelete}>Delete</button>
            </p>
        </div>
        )
    }

export default ShoppingCart;