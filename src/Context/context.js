import { createContext, useState } from "react";
import runChat from "../config/gemini";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

export const context = createContext();

const ContextProvider = (props)=>{
   
  const [input, setinput] = useState("")
  const [recentprompt, setrecentprompt] = useState('what are programming languages')
  const [prevprompt, setprevprompt] = useState([])
  const [display, setdisplay] = useState(false)
  const [loading, setloading] = useState(false)
  const [resultdata, setresultdata] = useState("")



  const onsent = async (prompt)=>{
    setresultdata("")
    setloading(true)
    setdisplay(true)
    setrecentprompt(input)
    const response =  await runChat(input)
    let newresponse = response.split("*").join("</br>")
    setloading(false)
    setresultdata(newresponse)
    setloading(false)
    setinput("")
  }

  const contextValue = {
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
  }
  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  )
}

export default ContextProvider