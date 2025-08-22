import React, { useState , useEffect } from 'react'
import StatusComponent from '../StatusComponent/StatusComponent';
import { UseDispatch , UseSelector } from 'react-redux';
import { AppDispatch , RootState } from '../../store';
import './AllStatusComponent.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { DragEndEvent , DndContext } from '@dnd-kit/core';


const AllStatusComponent: React.FC = () => {

 const  statusTypeList = [
  { id : "Draft" , 
    title : "Draft",
  },
    { id : "Unsolved" , 
    title : "Unsolved",
  },
    { id : "Under Review" , 
    title : "Under Review",
  },
    { id : "Solved", 
    title : "Solved",
  }
 ]

 type StatusType = "Draft" | "Unsolved" | "Under Review" | "Solved";


 const query = useSelector((state : RootState)=> state.search.query);


  const [items , setItems] = useState<any>([]);

  async function getAllTasks() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found, please login first");
      return;
    }
    
    if(query.length > 0){
       const response = await axios.get(`https://kraftbaseserver.onrender.com/api/tasks/search?query=${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    setItems(response.data);
    }
    else{

    const response = await axios.get("https://kraftbaseserver.onrender.com/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data);
    setItems(response.data);
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}


async function updateTaskStatus(taskId: string, newStatus: string) {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.put(
      `https://kraftbaseserver.onrender.com/api/tasks/${taskId}`,
      { StatusType: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Status updated in DB:", response.data);
    return response.data;
  } catch (error) {
    console.error(" Failed to update status:", error);
    throw error;
  }
}

 

  useEffect(() => {
  const handler = setTimeout(() => {
    getAllTasks();
  }, 300); 

  return () => {
    clearTimeout(handler); 
  };
}, [query]);




function dragEventHandler (event : DragEndEvent){
   const {active , over} = event;

   if(!over) return ;

   const taskId = active.id as string;
   const newStatus = over.id as StatusType;
  console.log(taskId , newStatus);
   console.log("before" ,items[taskId]);
  
   setItems((prevItems: any[]) =>
    prevItems.map(task =>
      String(task.id) === taskId ? { ...task, StatusType : newStatus } : task
    )
  );
  console.log("after" ,items[taskId]);
   updateTaskStatus(taskId , newStatus);
}  

useEffect(() => {
  // console.log("Items changed:", items);
}, [items]);

  return (
    <div className='AllStatusComponent'>
      <DndContext onDragEnd={dragEventHandler}>
  
           {statusTypeList.map((type , key) =>  
                     <StatusComponent
                          key={type.id}
                          tagItems={items.filter((task:any) => task.StatusType === type.id)}
                          statusType={type}
                         />
          //  <StatusComponent tagItems={items} statusType={type}/>
           )}
      </DndContext>
       
    </div>
  )
}

export default AllStatusComponent




  // const items = [
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Server Side Template Injection(Blind)",
  //    status : "Criticle",
  //    tag : "Hypejab",
  //    rating: 8.9,
  //    StatusType : "Solved"
  //    },
  //      {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "PII Disclousre",
  //    status : "Criticle",
  //    tag : "Getastra",
  //    rating: 7.9,
  //    StatusType : "Unsolved"
  //    },
  //     {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "JSON Web Key SEt Disclosed",
  //    status : "Low",
  //    tag : "Source C...",
  //    rating: 8.2,
  //    StatusType : "Unsolved"
  //    },
  //     {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Source C...",
  //    rating: 5.5,
  //    StatusType : "Solved"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Hypejab",
  //    rating: 5.5,
  //    StatusType : "Draft"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Getastra",
  //    rating: 5.5,
  //    StatusType : "Under Review"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Criticle",
  //    tag : "Hypejab",
  //    rating: 5.5,
  //    StatusType : "Draft"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Criticle",
  //    tag : "Hypejab",
  //    rating: 5.5,
  //    StatusType : "Under Review"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Getastra",
  //    rating: 5.5,
  //    StatusType : "Under Revie"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Getastra",
  //    rating: 5.5,
  //    StatusType : "Under Review"
  //    },
  //    {
  //    date : "3 jan, ",
  //    time : "4.35 PM",
  //    text : "Front Side Template Injection",
  //    status : "Medium",
  //    tag : "Hypejab",
  //    rating: 5.5,
  //    StatusType : "Solved"
  //    }
  //   ];