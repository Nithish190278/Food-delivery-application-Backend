import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Login = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook for redirection

  // Define state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // To handle error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:8000/api/signin", formData);
      const { token } = response.data;
 
      localStorage.setItem("token", token);
   
      navigate("/"); 
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>} 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" style={{ color: 'red' }}>Login</button>

      </form>
    </div>
  );
};

export default Login;
