// src/Register.js
import React, { useState } from 'react';
import './Register.css'; 
import axios from 'axios'
import { Link } from 'react-router-dom';
const Register = () => {
  const [data,setData]=useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('')
   axios.post('http://localhost:3000/posts',{username,email,password})
   .then((res) => {
    setData([...data,res.data]);
    
    setSuccess('Registration successful!');
    
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
   })
   .catch((err) => {
    setError('Registration failed')
    console.log(err)
   });
  };
const handlesubmit = () => {
    return (
        <div> 
          <Link to="/login"></Link>
        </div>
    )
}
const divstyle =  {
  backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
  backgroundSize: 'cover', // or 'contain' based on your requirement
      backgroundRepeat: 'no-repeat'

}
  return (
    <div style={divstyle}>
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" onClick={handlesubmit} style={{backgroundColor:"#FFA52C"}}>SUBMIT</button>
        <Link to="/login">Go back to Login</Link>
      </form>
      </div>
    </div>
  );
};

export default Register;
