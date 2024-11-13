import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const divstyle =  {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
    backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundRepeat: 'no-repeat'

  }
  return (
    <div style={divstyle}>
    <div className="home-container">
      <header className="header">
        <div style={{display:'flex'}}>
         
          <div style={{paddingLeft:'350px'}}>
        <h1 >Vehicle Service Booking Portal</h1>
        <p>Your one-stop solution for vehicle maintenance and repair</p>
        </div>
        
        </div>
      </header>
      {/* <div>
        <img src='https://th.bing.com/th/id/OIP.S1LXP5K4s--oZCCP94k5yQHaEo?rs=1&pid=ImgDetMain' style={{height:'500px',width:'1000px',padding:'130px',borderRadius:'8px'}}></img>
      </div> */}
      <div>
          <button type='submit' style={{marginTop:'40px',marginLeft:'470px',height:'40px',width:'300px',marginBottom:'90px',backgroundColor:'#FFA52C'}}><Link to="/deta">Upcoming  Appointment</Link></button>
        </div>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Oil Change</h3>
          <p>Keep your engine running smoothly with regular oil changes.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
        <div className="service-card">
          <h3>Brake Service</h3>
          <p>Ensure your safety with timely brake inspections and repairs.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
        <div className="service-card">
          <h3>Tire Replacement</h3>
          <p>Get your tires replaced for better performance and safety.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
        <div className="service-card">
          <h3>Battery Check</h3>
          <p>Prevent unexpected breakdowns with regular battery checks.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
        <div className="service-card">
          <h3>Transmission Repair</h3>
          <p>Ensure smooth shifting and reliable performance with our transmission repair services.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
        <div className="service-card">
          <h3>AC Repair</h3>
          <p>Stay cool with our efficient AC repair services.</p>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/oil-change">Learn More</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/rate-oil-change">Rate Service</Link></button>
          <button style={{backgroundColor:"#FFA52C"}}><Link to="/price-oil-change">View Price</Link></button>
        </div>
      </section>
          <div style={{margin:'10px',paddingLeft:'500px',height:'150px',width:'300px',alignContent:'center',textAlign:'center'}}>
           <button  style={{backgroundColor:'#FFA52C'}}> <Link to="/detail">Go to Booking</Link></button>
          </div>
          </div>
    </div>
  );
};

export default Home;
