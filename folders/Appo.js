import React, { useState } from 'react';
import axios from 'axios';

function Appo() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [cont, setCont] = useState('');
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [ser, setSer] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/data', { name, cont, type, brand, ser, date, time })
      .then((res) => {
        setData([...data, res.data]);
        setMessage('Appointment Booked Successfully!!!');
        // Clear the input fields after submission
        setName('');
        setCont('');
        setType('');
        setBrand('');
        setSer('');
        setDate('');
        setTime('');
      })
      .catch((error) => {
        console.error('There was an error booking the appointment!', error);
        setMessage('Appointment Booked Successful!!!');
      });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <h1 style={{ textAlign: 'center', marginTop: '60px' }}>Appointment Booking</h1>
        </div>
        <div style={{ border: '1px solid lightgrey', margin: '0 auto', height: 'auto', width: '400px', marginTop: '100px', padding: '20px', boxShadow: '4px 4px lightgrey', borderRadius: '8px' }}>
          <label>Name:</label><br></br>
          <br></br>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px',borderRadius:'8px'}} />
          <br></br>
          <br></br>
          <label>Contact Details:</label>
          <br></br>
          <br></br>
          <input type='text' value={cont} onChange={(e) => setCont(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px' ,borderRadius:'8px'}} />
          <br></br>
          <br></br>
          <label>Vehicle Type:</label>
          <br></br>
          <br></br>
          <input type='text' value={type} onChange={(e) => setType(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px',borderRadius:'8px' }} />
          <br></br>
          <br></br>
          <label>Vehicle Brand:</label>
          <br></br>
          <br></br>
          <input type='text' value={brand} onChange={(e) => setBrand(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px' ,borderRadius:'8px'}} />
          <br></br>
          <br></br>
          <label>Mention Service:</label><br></br>
          <br></br>
          <input type='text' value={ser} onChange={(e) => setSer(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px',borderRadius:'8px'}} />
          <br></br>
          <br></br>
          <label>Date:</label><br></br>
          <br></br>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px',borderRadius:'8px'}} />
          <br></br>
          <br></br>
          <label>Time:</label><br></br>
          <br></br>
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)} style={{ width: '250px', marginBottom: '10px' ,height:'30px',paddingLeft:'150px',borderRadius:'8px' }} />
          <br></br>
          <br></br>
          <button type='submit' style={{ width: '100%', backgroundColor: '#F9B0BB', color: 'black', height: '40px' }}>Book Appointment</button>
          {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default Appo;
