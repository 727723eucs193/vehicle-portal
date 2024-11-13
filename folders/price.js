import React from 'react';
import { Link } from 'react-router-dom';
import './Price.css'

const PriceOilChangePage = () => {
  const divstyle =  {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
    backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundRepeat: 'no-repeat'

  }
  return (
    <div style={divstyle}>
    <div className="page-container" style={{margin:'300px',border:'1px solid black',borderRadius:'8px'}}>
      <header className="page-header">
        <h1>Oil Change Pricing</h1>
      </header>
      <section className="page-content">
        <p>Here are the details for our oil change service pricing:</p>
        <ul>
          <li>Standard Oil Change: $39.99</li>
          <li>Premium Oil Change: $59.99</li>
        </ul>
        <p>Prices include oil filter replacement and oil top-up. Additional charges may apply for specialty services.</p>
      </section>
      <footer className="page-footer">
        <button style={{width:'200px'}}><Link to="/">Back to Home</Link></button>
      </footer>
      </div>
    </div>
  );
};

export default PriceOilChangePage;
