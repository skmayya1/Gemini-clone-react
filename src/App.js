import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Main from './Components/Main';

const App = () => {
  return (
    <div className='h-screen w-full flex bg-[#131314]'>
      <Sidebar/>
      <Main/>
    </div>
  )
}
export default App