import React, { useEffect, useState } from 'react';
import './Login.css'; 
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [data,setData]=useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success,setSuccess]=useState('');
  const [error, setError] = useState(''); 
  const navigate=useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // console.log('Email:', email);
    // console.log('Password:', password);
    axios.get('http://localhost:3000/posts')
    .then((res) => {
      const user=res.data;
      const users=user.find((u) => u.email === email && u.password === password);
      if(users){
        setSuccess('Login Successful');
        navigate('/')
      }
      else{
        setError('Password or Username Mismatch');
      }
    }
  )
  };
  const divstyle =  {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
    backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundRepeat: 'no-repeat'

  }
  return (
    <div style={divstyle}>
    <div className="login-container">
      <h2 style={{color:'whitesmoke'}}>Login to Vehicle Service Portal</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {success && <p>{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <button type="submit" style={{backgroundColor:"#FFA52C"}}>Login</button>
        {/* <a href="#">Don't have an account?<nav> <Link to="/register">Sign Up</Link></nav></a> */}
        <Link to="/register">Don't have an account? Sign Up</Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
