import React, { useState } from "react";
import "./CreateTask.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Task: React.FC = () => {
  const [formData, setFormData] = useState({
    text: "",
    status: "",
    tag: "",
    rating: "",
    StatusType: "",
  });

   const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // call API  to create issue

    setLoading(true);
    setMessage("");

    try { 
      
      const token = localStorage.getItem("token");
       const response = await axios.post("http://localhost:4000/api/tasks",formData,{
           headers: {
             Authorization: `Bearer ${token}`, 
            },
         });

      
      setFormData({
        text: "",
        status: "",
        tag: "",
        rating: "",
        StatusType: "",
      });

      navigate('/');
    } catch (error: any) {
      console.error(error);
      setMessage("Failed to create issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="taskf">
      <form onSubmit={handleSubmit}>
        <h2>Create Issue</h2>

  
        <input
          type="text"
          name="text"
          placeholder='e.g. "Server Side Template Injection(Blind)"'
          value={formData.text}
          onChange={handleChange}
          required
        />

   
        <select name="status" value={formData.status} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="Critical">Critical</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select name="tag" value={formData.tag} onChange={handleChange} required>
          <option value="">Select Tag</option>
          <option value="Hypejab">Hypejab</option>
          <option value="Getastra">Getastra</option>
        </select>

       
        <input
          type="number"
          name="rating"
          placeholder="Enter rating (e.g. 8.9)"
          value={formData.rating}
          onChange={handleChange}
          step="0.1"
          required
        />

       
        <select
          name="StatusType"
          value={formData.StatusType}
          onChange={handleChange}
          required
        >
          <option value="">Select Catogary Type</option>
          <option value="Draft">Solved</option>
          <option value="Unsolved">Unsolved</option>
          <option value="Under Review">Under Review</option>
          <option value="Solved">Solved</option>
        </select>

        <button type="submit" disabled={loading} > {loading ? "Creating..." : "Create Issue"} </button>
      </form>
    </div>
  );
};

export default Task;



