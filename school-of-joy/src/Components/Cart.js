import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;
    const buyNow = props.buyNow;
    // total purchase value
    const checkOut = cart.reduce((total , course)=> total + course.price ,0)
   
        
      
    
    return (
        <div href="#cart">
            <div id = "cart" className=" text-center card bg-light m-4 ml-5 text-dark position-sticky" style={{width: '20rem'}}>
                <div className="card-header">welcome Abroad</div>
                <div className="card-body">
                    <h5 className="card-title">Course on cart : {cart.length}</h5>
                    {/* getting data from array with the help of map */}
                    {cart.map(course => <p key={course.id} className="card-text">{course.name} : ${course.price} </p>)}
                    <h3>Total : $ {checkOut}</h3>
                </div>
            </div>
        </div>
    );
    }

export default Cart;