import React from 'react'
import './QuickFilter.css';
import { CgAdd } from "react-icons/cg";

type propType = {
    id : number,
    name : string,
}

const QuickFilter:React.FC<propType>  = ({id , name}) => {


const AddIcon = CgAdd as unknown as React.FC;

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
         <AddIcon/>
          {name}   
    </div>
  )
}

export default QuickFilter
