import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Deta() {
    const [data, setData] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [appointmentIdToCancel, setAppointmentIdToCancel] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then((res) => {
                setData(res.data);
            });
    }, []);

    const handleCancelClick = (id) => {
        setAppointmentIdToCancel(id);
        setShowDialog(true);
    };

    const confirmCancel = () => {
        axios.delete(`http://localhost:3000/data/${appointmentIdToCancel}`)
            .then(() => {
                setData(data.filter(item => item.id !== appointmentIdToCancel));
                setShowDialog(false);
                setAppointmentIdToCancel(null);
            });
    };

    const cancelCancel = () => {
        setShowDialog(false);
        setAppointmentIdToCancel(null);
    };

    return (
        <div>
            <div style={{ alignContent: 'center', paddingTop: '50px', paddingLeft: '440px' }}>
                <h1>Appointment Booked Details</h1>
            </div>
            {data.map((datas) => (
                <div key={datas.id}>
                    <div style={{ border: '1px solid lightgrey', margin: '100px', height: '400px', width: '900px', marginLeft: '180px', display: 'flex', boxShadow: '4px 4px lightgrey', borderRadius: '8px' }}>
                        <div>
                            <img src='https://th.bing.com/th/id/OIP.BHI-bf_xIJUNIsSCsVH58AHaHa?rs=1&pid=ImgDetMain' style={{ height: '200px', width: '200px', paddingLeft: '90px', paddingTop: '60px' }} alt="Vehicle" />
                        </div>
                        <div style={{ paddingLeft: '200px' }}>
                            <h3>Name: {datas.name}</h3>
                            <h3>Contact Details: {datas.cont}</h3>
                            <h3>Vehicle Type: {datas.type}</h3>
                            <h3>Vehicle Brand: {datas.brand}</h3>
                            <h3>Vehicle Service: {datas.ser}</h3>
                            <h3>Appointment Fixed Date and Time: {datas.date} and {datas.time}</h3>
                            <button style={{ height: '40px', width: '350px', backgroundColor: '#FFA52C' }} onClick={() => handleCancelClick(datas.id)}>Cancel Appointment</button>
                        </div>
                    </div>
                </div>
            ))} 
            {showDialog && (
                <div style={{
                    position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', 
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'white', padding: '20px', borderRadius: '5px', textAlign: 'center'
                    }}>
                        <h3>Are you sure you want to cancel this appointment?</h3>
                        <div style={{display:'flex'}}>
                        <button onClick={confirmCancel} style={{width:'60px',marginLeft:'100px',backgroundColor:'#FFA52C'
                        }}>Yes</button>
                        <button onClick={cancelCancel} style={{width:'60px',marginLeft:'100px',backgroundColor:'#FFA52C'}}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Deta;
