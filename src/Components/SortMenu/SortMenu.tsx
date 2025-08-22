import React from 'react'
import './SortMenu.css'
import SearchBar from '../SearchBar/SearchBar'
import QuickFilter from '../QuickFilter/QuickFilter'
import SortComponent from '../SortComponent/SortComponent'
import CreateTask from '../CreateTask/CreateTask'
import { useNavigate } from 'react-router-dom'

const SortMenu = () => {
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

     const navigate = useNavigate();
    
       const goToCreateIssue = () => {
        navigate("/create"); 
      };
  return (
    <div className='sortMenu'>
        <div className="left">
             <SearchBar/>
             <SortComponent/>
              {list.map((el, i) =>  <QuickFilter name={el.Name} id={el.id} key={i}/>)}
        </div>

        <div className="right" onClick={()=>goToCreateIssue()} style={{cursor :"pointer"}}>
             create task
        </div>
        
    </div>
  )
}

export default SortMenu
