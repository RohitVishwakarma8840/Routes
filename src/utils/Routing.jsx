import React from 'react'
import { Route } from 'react-router-dom';
import { Link,Routes} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';



function Routing() {
  return (

    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/user"  element={<User/>}/>
   </Routes>



  )
}

export default Routing