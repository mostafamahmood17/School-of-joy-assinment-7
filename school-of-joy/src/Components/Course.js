import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {
    // distructuring object data recieved through props
    const {name, price, image, instructor, students} = props.course;
    const sendToCart = props.sendToCart;
    
    return (
        <div className="float-right text-dark m-2 mr-4">
         <div className="card " style={{width: "18rem", backgroundColor:"Aliceblue"}}>
                <img className="card-img-top img-thumbnail" style={{width: '100%', height : '150px'}} src={image} alt=""/>
           <div className="card-body">
                <h5 id ="course" className="card-title">Course : {name}</h5>
                <p id ="price" className="card-text">Price :$ {price}</p>
                <p className="card-text">Instructor : {instructor}</p>
                <p className="card-text">Total students : {students}</p>
                <button onClick={() => sendToCart(props.course)} className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
       </div>   
       );
  };

export default Course;


