import React, { useEffect , useRef } from 'react'

const TerminalCommandLine = ({readonly,focus,commandHandler}) => {
  const inputField = useRef()
    const newcommandHandler = (e) => {
        if (e.key == "Enter") {
            commandHandler(e.target.value)
        }
    }
  useEffect(()=>{
    if(focus && inputField.current){
      inputField.current.focus()
    }
  },[focus])
  return (
    <div className='flex gap-2 items-center my-[22px]'>
        <p className='TerminalUser md:text-[18px] sm:text-[14px] text-[10px]'>nexuser@estin :<span className='text-[#277ef5]'>~</span><span className='text-white'>$</span></p>
        <input type="text" 
          className='TerminalCommandLineText no-underline border-none outline-none bg-transparent flex-1 h-full' 
          onKeyDown={newcommandHandler} 
          readOnly={readonly} 
          ref={inputField}
        />
    </div>
  )
}

export default TerminalCommandLine