// src/BatteryCheck.js
import React, { useState } from 'react';
import './BatteryCheck.css'; 

const BatteryCheck = () => {
  const [formData, setFormData] = useState({
    batteryType: '',
    batteryAge: '',
    lastCheckDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div className="battery-check-container">
      <h2>Battery Check Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Battery Type:
          <input
            type="text"
            name="batteryType"
            value={formData.batteryType}
            onChange={handleChange}
            placeholder="Enter battery type"
          />
        </label>
        <label>
          Battery Age:
          <input
            type="text"
            name="batteryAge"
            value={formData.batteryAge}
            onChange={handleChange}
            placeholder="Enter battery age"
          />
        </label>
        <label>
          Last Check Date:
          <input
            type="date"
            name="lastCheckDate"
            value={formData.lastCheckDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{backgroundColor:"#FFA52C"}}>Submit</button>
      </form>
    </div>
  );
};

export default BatteryCheck;
