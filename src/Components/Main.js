import React, { useContext } from 'react'
import send from '../assets/send-plane-2-line.png'
import { context } from '../Context/context';
import gem from '../assets/bard-fill.png'


const Main = () => {

  const  {
    prevprompt,
    setprevprompt,
    input, 
    setinput,
    recentprompt,
    setrecentprompt,
    display,
    setdisplay,
    loading,
    setloading,
    resultdata, 
    setresultdata,
    onsent
   } = useContext(context)

  let profile = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='w-full relative flex flex-col items-center'>
      <nav className='flex items-center justify-between w-full p-6'>
        <h2 className='text-[#7C7E7F] text-2xl font-semibold'>Gemini</h2>
        <img className='h-14 rounded-full ' src={profile} alt="" />
      </nav>
       {!display?
       <>
       <div className="w-full flex justify-center leading-4 flex-col items-center">
         <div className="text">
         <h1 className='text-7xl w-fit font-semibold bg-gradient-to-tr text-transparent tracking-tighter bg-clip-text from-[#4F82EE] to-[#ff1235]'>Hello, Dev </h1> 
        <h1 className='text-7xl text-[#444746] font-semibold tracking-tighter' > How can I help you today? </h1>
         </div>
      </div>
       </>
       :<>
       <div className='scrolling-auto  overflow-y-scroll min-w-[50vw] max-h-[80vh] scroll-smooth [&::-webkit-scrollbar]:hidden'>
          <div className="flex items-center gap-5 text-white ">
              <img className='h-14 rounded-full ' src={profile} alt="" />
              <p className='w-40vw'>{recentprompt}</p>
          </div>
          <div className='flex gap-5 text-white p-8 w-[60vw]'>
            <img className='h-8' src={gem} alt="" />
            {loading?
            <div className='w-full flex flex-col gap-5 p-5 rounded-xl '>
              <hr className='rounded-xl h-4 bg-gradient-to-r from-[#6D6FCF] to-[#ff1235] opacity-20 via-[#131314] bg-[#131314] border-none' />
              <hr className='rounded-xl h-4 bg-gradient-to-r from-[#ff1235] to-[#6D6FCF] opacity-20 via-[#131314] bg-[#131314] border-none'/>
              <hr className='rounded-xl h-4 bg-gradient-to-r from-[#ff1235] to-[#ff1235] opacity-20 via-[#131314] bg-[#131314] border-none'/>
            </div>
            :
            <p className='leading-7' dangerouslySetInnerHTML={{__html:resultdata}}></p>}
          </div>
       </div>
       </>}
      <div className="bottom-container gap-1 absolute flex flex-col items-center bottom-0 right-0.6 p-2">
        <div className="input flex py-4 bg-[#282A2C] rounded-full px-4">
          <input
           onChange={(e)=>{setinput(e.target.value)}}
          className='outline-0 bg-transparent text-white pr-5 w-[50vw] text-lg font-semibold ' type="text" name="" id="" placeholder='Enter a prompt here' />
          <img className={`${input==""?"hidden":""}`} onClick={()=>{onsent()
            
          }} src={send} alt="" />
        </div>
        <h4 className=' text-white text-xs font-thin'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h4>
        </div>

    </div>
  )
}

export default Main
