import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Calendly from './components/Calendly'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
     
      <Routes>
      <Route path='/' element={<Home/>}  />
     <Route path='/book-meeting' element={ <Calendly/>}  />
     

      </Routes>
   

    </div>
  )
}

export default App
