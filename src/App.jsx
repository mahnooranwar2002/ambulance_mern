import React from 'react'
import Nav from './Components/Website/Nav'
import Index from './Components/Website/Index'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Website/About'
import Contact from './Components/Website/Contact'

const App = () => {
  return (
    <div>
     <Routes>
      <Route element={<Index></Index>} path='/'></Route>
        <Route element={<About></About>} path='/about'></Route>
         <Route element={<Contact></Contact>} path='/contact'></Route>
     </Routes>
    </div>
  )
}

export default App
