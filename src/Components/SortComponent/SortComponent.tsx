import React from 'react'
import './SortComponent.css';
import { CgArrowsExchangeAltV } from "react-icons/cg";

const SortComponent:React.FC = () => {
 const ExchangeIcon = CgArrowsExchangeAltV as unknown as React.FC;
  return (
  
    <div className='sort'>
    <div >
      Sort BY
    </div>

    <div>
        <ExchangeIcon/>
    </div>

    </div> 
   
    
  )

}

export default SortComponent
