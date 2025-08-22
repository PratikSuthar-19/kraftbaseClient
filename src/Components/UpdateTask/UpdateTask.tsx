import React, { useState, useEffect } from "react";
import "./UpdateTask.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// type TaskProps = {
//   taskId: string; 
// };

const UpdateTask: React.FC = () => {
  const [formData, setFormData] = useState({
    text: "",
    status: "",
    tag: "",
    rating: "",
    StatusType: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`https://kraftbaseserver.onrender.com/api/tasks/${params?.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData({
          text: response.data.text,
          status: response.data.status,
          tag: response.data.tag,
          rating: response.data.rating,
          StatusType: response.data.StatusType,
        });
      } catch (error) {
        console.error("Failed to fetch task:", error);
      }
    };

    fetchTask();
  }, [params?.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://kraftbaseserver.onrender.com/api/tasks/${params.id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("Task updated successfully!");
      navigate('/')
    } catch (error) {
      console.error(error);
      setMessage("Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id : any) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;

    await axios.delete(`https://kraftbaseserver.onrender.com/api/tasks/${params.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Remove the task from local state
    // setItems((prevItems) => prevItems.filter((task) => task.id !== taskId));

    console.log(`Task ${id} deleted successfully`);
    navigate('/');
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
};

  return (
    <div className="taskf">
      <form onSubmit={handleSubmit}>
        <div>
           <h2>Update Issue</h2>
             <button style={{backgroundColor : "red"}} onClick={()=>deleteTask(params.id)}>
        Delete Issue
      </button>
        </div>
        
      

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
          <option value="">Select Category Type</option>
          <option value="Draft">Draft</option>
          <option value="Unsolved">Unsolved</option>
          <option value="Under Review">Under Review</option>
          <option value="Solved">Solved</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Issue"}
        </button>

        {message && <p>{message}</p>}
      </form>
    
    </div>
  );
};

export default UpdateTask;
