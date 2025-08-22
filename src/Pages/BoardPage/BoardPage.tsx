import React, { useEffect } from 'react'
import './BoardPage.css'
import SortMenu from '../../Components/SortMenu/SortMenu';
import AllStatusComponent from '../../Components/AllStatusComponent/AllStatusComponent';
import { useNavigate } from "react-router-dom";

const BoardPage:React.FC= () => {
 
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  
   useEffect(()=>{
    if(!token){
    navigate('/register');
  }
   },[])

  return (
    <div className='boardPage'>
      <div style={{display : "flex" , justifyContent : "space-between"}}>
         <h2 style={{margin : "0"}}>Vulnerabilites</h2>
        <span  style={{ cursor:"pointer", border : " 1px solid black" , borderRadius : "8px" , padding :"10px" , color : "white" , backgroundColor : "black"}} onClick={()=>{localStorage.removeItem("token"); navigate('/login')}}>Logout</span>
      </div>
        
         <SortMenu/>
         <AllStatusComponent/>
    </div>
  )
}

export default BoardPage
