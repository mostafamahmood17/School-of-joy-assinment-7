import React from 'react';

const Cart = () => {
    const cartStyle={
        border: "2px solid salmon",
        borderRadius: "10px",
      
    }
    return (
        <div style={cartStyle} className="m-3 ml-4 p-3 col-sm-12">
            <h2>welcome Abroad</h2>
            <h3>Course Added : </h3>
            <h3>Total price : </h3>

            
        </div>
    );
};

export default Cart;