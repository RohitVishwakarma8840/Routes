import { useRef, useState } from 'react'
import { Route } from 'react-router-dom';
import { Link,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Nav from './components/Nav';
import Routing from './utils/Routing';

function App() {

 
  return (
    <>

   <Nav/>
 <Routing/>

      
    </>
  )
}

export default App
