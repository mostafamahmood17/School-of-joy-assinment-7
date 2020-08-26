import React from 'react';

const Course = (props) => {
    const {name, price, image} = props.course;

    const divStyle ={
        border: "2px solid salmon",
        borderRadius: "10px"
    }
    
    return (
        <div className= "m-3 p-3" style = {divStyle}>
        <h2>Course : {name}</h2>
        <h3 className="text-secondary">Price :$ {price}</h3>
        <div className="row-md-4 col-lg-6">
        <img style={{width: '100px', height: '100px'}}src={image} alt=""/>
        <button className='btn btn-light mt-2 float-right'>Enroll Now</button>
        </div>
        
        
            
        </div>
    );
};
// onClick ={()=>handleSalary(props.user)}
export default Course;