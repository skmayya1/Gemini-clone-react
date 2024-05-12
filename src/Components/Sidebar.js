import React, { useState } from 'react'
import menu from '../assets/menu-line.png'
import add from '../assets/add-line.png'
import micon from '../assets/chat-4-line.png'
import help from '../assets/question-line.png'
import activity from '../assets/history-line.png'
import settings from '../assets/settings-5-line.png'
import { useGSAP } from '@gsap/react'



const Sidebar = () => {
  const [menubar, setmenubar] = useState(false)
  

 
  return (
    <div className={` h-screen transition-all duration-1000 ease-in-out ${menubar==false?"w-[7.6vh]":"w-[31.7vh]"}  bg-[#1E1F20]`}>
      <div className="px-3 py-4 h-screen flex flex-col justify-between ">
       <div className="flex  flex-col items-start gap-10">
            <img onClick={()=>{setmenubar(menubar==true?false:true) 
              }
              } className='bg-cover rounded-full p-2  hover:bg-[#2F3030]' src={menu} alt="" />
            <div className="flex flex-col gap-4 items-start ">
              <div className=" flex items-center  bg-[#1A1A1C] px-2 rounded-full py-2">
                <img className='h-6' src={add} alt="" />  
                <h5 className={`text-[#666565] font-semibold ${menubar==false?"hidden":"px-3"}`}  >New chat</h5>
              </div>
              <h5 className={`pl-3 text-white text-sm font-semibold ${menubar==false?"hidden":""}`}>Recent</h5>
              <div className={`recent-container  ${menubar==false?"hidden":""}`}>
              <div className=" flex  gap-2.5 hover:bg-[#2F3030] px-4 rounded-full py-2 pr-[14vh] w-full items-center">
                <img className='h-4' src={micon} alt="" />
                <h5 className='text-white text-sm w-28 transition-all ease-in-out '>What is react....</h5>
             </div>
              </div>
            </div>
       </div>
       <div className="pb-10">
         <div className=" flex items-center gap-2.5 hover:bg-[#2F3030] px-2.5 rounded-full py-2.5 ">
          <img className='h-5' src={help} alt="" />
          <h5 className={`text-white text-sm  ${menubar==false?"hidden":"pr-[12vh]"}`}>Help</h5>
         </div>
         <div className=" flex items-center gap-2.5 hover:bg-[#2F3030] px-2.5 rounded-full py-2.5  ">
          <img className='h-5' src={activity} alt="" />
          <h5 className={`text-white text-sm ${menubar==false?"hidden":""}`}>Activity</h5>
         </div>
         <div className=" flex items-center gap-2.5 hover:bg-[#2F3030] px-2.5 rounded-full py-2.5 ">
          <img className='h-5' src={settings} alt="" />
          <h5 className={`text-white text-sm ${menubar==false?"hidden":""}`}>Settings</h5>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Sidebar