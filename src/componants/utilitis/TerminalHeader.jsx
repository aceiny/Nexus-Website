import React from "react";
import {AiOutlineClose,AiOutlineMinus} from "react-icons/ai"
import {TbSquare} from "react-icons/tb" 
const TerminalHeader = () => {
    return(
        <div className="flex flex-col gap-[19px] text-white">
            <div className="flex justify-center px-4 items-center">
                <h1 className="m-auto">nexus@estin:~</h1>
                <div className="flex gap-[10px] items-center">
                    <AiOutlineMinus/>
                    <TbSquare/>
                    <AiOutlineClose/>
                </div>
            </div>
            <ul className="flex gap-6 md:px-[82px] px-[25px]">
                <li>file</li>
                <li>Actions</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
            </ul>
        </div>
    )
}
export default TerminalHeader