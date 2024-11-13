import React from 'react';
import { Link } from 'react-router-dom';
 import './Oilchange.css'

const OilChangePage = () => {
  const divstyle =  {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
    backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundRepeat: 'no-repeat'
   
  }
  return (
    <div style={divstyle}>
    <div className="page-container" style={{margin:'300px',border:'1px solid black',borderRadius:'8px'}}>
      <header className="page-header">
        <h1>Oil Change Service</h1>
      </header>
      <section className="page-content">
        <p>Our oil change service helps keep your engine running smoothly by replacing old oil with fresh, high-quality oil. Regular oil changes are crucial for the longevity and performance of your vehicle.</p>
        <p><strong>Why Choose Us?</strong> We use top-quality oil and filters to ensure the best performance and longevity for your vehicle.</p>
        <p><strong>Service Includes:</strong> Oil filter replacement, Oil top-up, and Engine check.</p>
      </section>
      <footer className="page-footer">
        <button style={{backgroundColor:"#FFA52C",width:'200px'}}><Link to="/">Back to Home</Link></button>
      </footer>
      </div>
    </div>
  );
};

export default OilChangePage;
