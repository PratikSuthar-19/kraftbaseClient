import React , {useState} from 'react'
import './SearchBar.css';

import { useDispatch , useSelector} from "react-redux";
import { setQuery } from "../../slices/searchSlice"
import { AppDispatch , RootState } from "../../store";

const SearchBar: React.FC = () => {
   
     const dispatch = useDispatch<AppDispatch>();

     const query = useSelector((state: RootState) => state.search.query);
     
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value)); 
  };
  
     
  return (
    <div>
      <input
        type="text"
        placeholder="Search By Issue Name..."
        value={query}
        onChange={handleChange}
        style={{
          padding: "7px",
          width: "13rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      />
    </div>
  )
}

export default SearchBar

