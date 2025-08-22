import React , {useState}from 'react'
import TagComponent from '../TagComponent/TagComponent'
import './TaskComponent.css'
import { useDraggable } from '@dnd-kit/core'
import UpdateTask from '../UpdateTask/UpdateTask'
import { useNavigate } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";



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

const TaskComponent: React.FC<tagItem>= ({date , time , text , status , tag , rating ,id, StatusType }) => {

    const tagdata = [
        {
            text : "Criticle",
            backgrounColor :"red",
            color : "white",

        },
        {
            text : "Medium",
            backgrounColor :"orange",
            color : "white",
        },
        {
            text : "low",
            backgrounColor :"yellow",
            color : "white",
        },

    ];
      const navigate = useNavigate();

      const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
      const[verifyColor , setVerifyColor] = useState('gray');


    const{ attributes , listeners , setNodeRef , transform}= useDraggable({
      id : id,
    })

    const style =  transform ? {
      transform :`translate(${transform.x}px , ${transform.y}px)`,
    }: undefined;


  return (
    <div ref={setNodeRef} 
        // {...listeners}
        // {...attributes}
        style={style} 
        className='task'>

       <div className="task-header" style={{display : "flex" , justifyContent : "space-between"}}>
            <div style={{display : "flex" , gap : "5px"}}>
             <div className="date"  {...listeners} {...attributes}>
                 {date}
             </div>
             <div className="time" {...listeners} {...attributes} >
                  {time}
             </div>
             </div>

             <div style={{cursor:"pointer"}} onClick={(e)=>{
                 e.stopPropagation();
                 navigate(`edit/${id}`);
             }}>
            <FaRegEdit  color='black'/>
             </div>
      

       </div>

       <div className="task-des"  {...listeners}
        {...attributes}>
             <p>
                {text}
             </p>
       </div>

       <div className="task-bottom" >
              <div className="left" {...listeners} {...attributes}>

               <TagComponent  backgroundColor='Red' color='white' text={status}/>
               <TagComponent backgroundColor='plum' color='purple' text = {tag}/>

               <div className="rating" style={{fontWeight : 500 }}>
                {rating}
               </div>
            </div>

              <div onClick={(e) =>  {e.preventDefault(); setVerifyColor("blue")}} style={{ cursor: "pointer" }}>
                <RiVerifiedBadgeFill color={verifyColor} />
              </div>
       </div>

    </div>



  )
}

export default TaskComponent
