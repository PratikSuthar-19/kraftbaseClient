import React from 'react'
import './SortComponent.css';
import { CgArrowsExchangeAltV } from "react-icons/cg";

const SortComponent:React.FC = () => {
 
  return (
  
    <div className='sort'>
    <div >
      Sort BY
    </div>

    <div>
        <CgArrowsExchangeAltV />
    </div>

    </div> 
   
    
  )

}

export default SortComponent
