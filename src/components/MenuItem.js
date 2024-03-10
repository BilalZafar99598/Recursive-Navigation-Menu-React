import MenuList from "./MenuList";
import { useState } from "react";
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

export default function MenuItem({ item }){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleCurrentLabel(getCurrentlabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }

    console.log(displayCurrentChildren);

    return <li>
        <div style={{display: 'flex', gap: '20px'}}>
            <p>{item.label}</p>
            {item && item.children && item.children.length ? 
            <span onClick={() => handleToggleCurrentLabel(item.label)}>
                {
                    displayCurrentChildren[item.label] ? <FaMinus size={20}/> : <FaPlus size={20}/>
                }
            </span> : null}
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? 
            <MenuList list={item.children}/>
             : null
        }
    </li>
}