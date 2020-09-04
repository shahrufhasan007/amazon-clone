import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    
    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precison = num.toFixed(2);
        return Number(precison);
    }
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {formatNumber (total)}</p>
            <p><small>Shipping Const : {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;