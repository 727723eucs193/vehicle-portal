
import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
const BookingForm = () => {
    const [data,setData]=useState([])
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        make: '',
        model: '',
        service: '',
        date: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
          
        setSuccessMessage('Registration Successful!');
        axios.post('http://localhost:3000/posts',{formData})
        .then((res) => {
            setData([...data,res.data])
       
        setFormData({
            fullName: '',
            phone: '',
            make: '',
            model: '',
            service: '',
            date: ''
        });
    })
    };
    return (
        <div className="container">
            <h1>Vehicle Service Booking</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Customer Information</legend>
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </fieldset>
                
                <fieldset>
                    <legend>Vehicle Information</legend>
                    <label htmlFor="make">Vehicle Make:</label>
                    <select
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select make</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="ford">Ford</option>
                    </select>
                    
                    <label htmlFor="model">Vehicle Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />
                </fieldset>
                
                <fieldset>
                    <legend>Service Details</legend>
                    <label htmlFor="service">Select Service:</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select service</option>
                        <option value="oil-change">Oil Change</option>
                        <option value="tire-rotation">Tire Rotation</option>
                        <option value="brake-service">Brake Service</option>
                    </select>
                    
                    <label htmlFor="date">Preferred Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </fieldset>
                
                <button type="submit">Book Appointment</button>
            </form>
            
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default BookingForm;
