import React, {useState} from 'react';
import Course from './Components/Course.js';
import Cart from './Components/Cart.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import schoolData from '../src/schoolData/schoolData.js'
function App() {
  const [course , setCourse] = useState(schoolData);
  console.log("schoolData", schoolData)
  return (
    <div>
      <header className="bg-dark text-white">
        <h1 className="text-center text-white">School Of Joy</h1>
        <div className="row">
        <div>
            <Cart></Cart>
         

          </div>
          <div className="col">
          {course.map(courses => <Course course={courses} key={courses.id}></Course>)}
          </div>
          
        </div>
  
      </header>
    </div>
  );
}

export default App;
