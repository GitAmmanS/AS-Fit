import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddItems from './pages/AddItems'
import ListItems from './pages/ListItems'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import SideMenu from './components/SideMenu'
const App = () => {
  return (
    <div className='m-[1rem] flex-col '>
      <NavBar/>
      <div className='flex flex-row '>
        <div className='flex flex-1 '>
      <SideMenu/>
      </div>
      <div className='flex flex-6 overflow-y-scroll'>
      <Routes>
      <Route path="/addItems" element={<AddItems/>}/>
        <Route path="/listItems" element={<ListItems/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default App
