import React from 'react';
import './App.css';
import BoardPage from './Pages/BoardPage/BoardPage';
import Login from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import CreateTask from './Components/CreateTask/CreateTask';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route, Link , Navigate } from "react-router-dom";


function App() {

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

    const token = localStorage.getItem("token");

  return (



<Provider store={store}>


  <Router>

    <div className="App">
      <Routes>
        {/* <Route path='/' element={token ? <BoardPage /> : <Navigate to="/register" />}/> */}
        <Route path='/' element ={<BoardPage/>} />
        <Route path="/create" element={<CreateTask />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<UpdateTask/>}/>
      </Routes>
    </div>

  </Router>


</Provider>
  );
}

export default App;
