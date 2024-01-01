import config from "./utilitis/config.js";
import Terminal from 'react-console-emulator'
import TerminalHeader from "./utilitis/TerminalHeader.jsx";



const TerminalEmu = () => {
    // const [command,setCommands] = useState([])
    // const commandHandler = (commanda) => {
    //     if(commanda == "") return
    //     if(commanda == "clear") return setCommands([])
    //     const cmdR = commands[commanda]
    //     console.log("runnnin" , cmdR)
    //     if(cmdR){
    //         console.log("pushin")
    //         setCommands([...command,cmdR])
    //     }
    //     else {
    //         setCommands([...command,"Command not found"])
    //     }
    // }

    const { globalStyles, commands } = config

    return (
        <>
        <TerminalHeader/>
        <Terminal
            welcomeMessage={'Welcome to the Nexus Terminal\nType "help" to get started.'}
            commands={commands}
            style={globalStyles}
            promptLabel={'nexus@estin:~$'}
            className='bg-red-700'
            dangerMode={true}
        />
        </>
    )
}

export default TerminalEmu