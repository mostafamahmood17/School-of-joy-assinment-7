import React, {useState} from 'react';
import Course from './Components/Course.js';
import Cart from './Components/Cart.js';
import Header from './Components/Header.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import schoolData from '../src/schoolData/schoolData.js'
function App() {
  // getting data from own data
  const [course , setCourse] = useState(schoolData);
  // creating new state for cart
  const [cart, setCart] = useState([]);
  // enroll button on click function
  const sendToCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart)
}



// passing data through components with the help of props
  return (
    <div className="bg-dark text-white" id = "home">
        <Header></Header>
        <marquee className="text-light">Enroll now!!! spot is limited...</marquee>
        <div className="row">
         <div>
            <Cart cart = {cart}></Cart>
            </div>
          <div className="col">
            {/* passing all data from own data through map */}
          {course.map(courses => <Course course={courses} key={courses.id} sendToCart={sendToCart}></Course>)}
          </div>
        </div>
    </div>
  );
}

export default App;
