import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Calendly from './components/Calendly'
import Home from './components/Home'
import AnimatedCursor from './components/AnimatedCursor'
import LoomPage from './components/LoomPage'
import LoomDetail from './components/LoomDetail'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
     <AnimatedCursor/>
      <Routes>
      <Route path='/' element={<Home/>}  />
     <Route path='/book-meeting' element={ <Calendly/>}  />
       <Route path='/loom' element={ <LoomPage/>}  />
      <Route path="/loom/:industry" element={<LoomDetail />} />
      </Routes>
   

    </div>
  )
}

export default App
