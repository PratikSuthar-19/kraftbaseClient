import React from 'react'
import './QuickFilter.css';
import { CgAdd } from "react-icons/cg";

type propType = {
    id : number,
    name : string,
}

const QuickFilter:React.FC<propType>  = ({id , name}) => {



    const list = [
        {id : 1 ,
         Name : "Assigned To"  
        },
        {id : 2 ,
         Name : "Severity"  
        },
        {id : 3 ,
         Name : "Status"  
        },
        {id : 4 ,
         Name : "Pentest"  
        },
        {id : 5 ,
         Name : "Target"  
        },
    ]
  return (
    < div className='quickFilter'>
          <CgAdd/>
          {name}   
    </div>
  )
}

export default QuickFilter
