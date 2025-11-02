import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Calendly from './components/Calendly'
import Home from './components/Home'
import AnimatedCursor from './components/AnimatedCursor'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
     <AnimatedCursor/>
      <Routes>
      <Route path='/' element={<Home/>}  />
     <Route path='/book-meeting' element={ <Calendly/>}  />
     

      </Routes>
   

    </div>
  )
}

export default App
