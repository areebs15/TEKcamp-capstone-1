import React from 'react';
function ShoppingCart(props) {
    return (
        <div>
            <h4><p> {props.item} Price: ${props.price} 
                <button value={props.keys} id={props.price} onClick={props.handleDelete}>Delete</button>
            </p></h4>
        </div>
        )
    }

export default ShoppingCart;