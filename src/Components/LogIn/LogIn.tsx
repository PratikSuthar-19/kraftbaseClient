import React, { useState } from "react";
import './LogIn.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email , password)

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://kraftbaseserver.onrender.com/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.access_token);
       navigate('/');
      
      alert("Logged in!");


  setTimeout(() => {
  localStorage.removeItem("token");
  console.log("Token expired, cleared from localStorage");
}, 7 * 24 * 60 * 60 * 1000);
    } catch (err: any) {
        console.log(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
