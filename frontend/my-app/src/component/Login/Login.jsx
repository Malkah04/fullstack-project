import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:7000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate("/");
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
  return (
    <div>
        <form className='top'  onSubmit={handleSubmit}>
        <h1 style={{display:'flex',alignItems:"center",alignContent:'center'}}>logoName</h1>
       <input
                type="text"
                id="email"
                placeholder="email"
                name="email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                id="password"
                placeholder="password"
                name="password"
                className='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button className='log' type="submit">Login</button>
                <span onClick={() => navigate("/signup")}>
                <p className='acc'>Dont have an account?</p>
                </span>
                
               
                </form>
    </div>
  )
}
