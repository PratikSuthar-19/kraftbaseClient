import React, { useState } from 'react'
import './StatusComponent.css';
import TaskComponent from '../TaskComponent/TaskComponent';
import { useDroppable } from '@dnd-kit/core';
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";




// type tagItem = {
//     backgroundColor: string;
//     color: string;
//     text: string;
// }

type tagItem = {
     date : string;
     time : string;
     text : string;
     status : string;
     tag : string;
     rating: number;
     StatusType : string;
     id:string

}

type statusType = {
  id : string;
  title : string;
}
type statusListProps = {
    statusType : statusType;
    tagItems : tagItem[];
    
}

const StatusComponent:React.FC<statusListProps> = ({statusType , tagItems}) => {
 
    const count = tagItems.filter(item => item.StatusType === statusType.title).length;

   const ThreeDot = HiOutlineDotsHorizontal  as unknown as React.FC;
   const Plus = FaPlus  as unknown as React.FC;
    const {setNodeRef} =useDroppable({
       id : statusType.id
    })
  return (
   <div ref={setNodeRef} className="statusComp">
      <div className="top">
          <div className="top-left">
             <h3 className="status-name">
               {statusType.title}
              </h3>
             <div className="count" style={{color : 'rgb(137, 137, 137)'}}>
             {count}
             </div>
          </div>

          <div className="top-right">
            <p><ThreeDot/></p>
            <p><Plus/></p>
          </div>
      </div>

        {/*<div  className="task-list"  >
       {tagItems.map((item , key) => statusType.title === item.StatusType  &&
                                 <TaskComponent date={item.date} 
                                                     time ={item.time} 
                                                     text={item.text} 
                                                     status= {item.status} 
                                                     StatusType={item.StatusType}
                                                     tag={item.tag} 
                                                     rating={item.rating} id={item.id}/> )} */}


                                                     <div ref={setNodeRef} className="task-list"  >
        {tagItems.filter(item => statusType.title === item.StatusType)
          .map((item , key) => (
          
            <TaskComponent
             date={item.date} 
              time={item.time} 
              text={item.text} 
              status={item.status} 
              StatusType={item.StatusType}
              tag={item.tag} 
              rating={item.rating} id={String(item.id)} key={item.id}/>
))}


  
      </div>

   </div>
  )
}

export default StatusComponent
