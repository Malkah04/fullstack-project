import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [name,setName] =useState('');
  const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:7000/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

  return (
    <div>
      <form className='top' onSubmit={handleSubmit}>
        <h2 >logoName</h2>
        <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className='name'
        required
        />

        <input
         type="text" 
         placeholder="Email" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
         className='email'
         required
         
         />
        <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className='password'
        required
        />
        <button className='sign' type="submit">Sign Up</button>
      <span onClick={() => navigate("/login")}>
      <p className='acc'>Already have an account? </p>
      </span>
      </form>

     

    </div>
  )
}
