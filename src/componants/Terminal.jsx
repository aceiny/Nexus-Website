import React, { useState } from 'react'
import TerminalHeader from './utilitis/TerminalHeader'
import TerminalCommandLine from './utilitis/TerminalCommandLine'
import { commands } from '../data/LandingPage'
const Terminal = () => {
    const [command,setCommands] = useState([])
    const commandHandler = (commanda) => {
        if(commanda == "") return
        if(commanda == "clear") return setCommands([])
        const cmdR = commands[commanda]
        console.log("runnnin" , cmdR)
        if(cmdR){
            console.log("pushin")
            setCommands([...command,cmdR])
        }
        else {
            setCommands([...command,"Command not found"])
        }
    } 
  return (
    <div className='Terminal h-[500px] overflow-y-auto sticky'>
        <TerminalHeader/>
        <div className='md:px-[82px] px-4'>
            <TerminalCommandLine commandHandler={commandHandler} readonly={command.length > 0} />
            <div>
                {
                    command.map((v,i)=> {
                    return <div>
                            <p className='text-white'>{v}</p>
                            <TerminalCommandLine 
                                readonly={!(i === command.length - 1)} 
                                focus={i === command.length - 1} 
                                commandHandler={commandHandler}
                            />
                    </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Terminal