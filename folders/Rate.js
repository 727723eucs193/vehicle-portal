import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import './Rate.css'

const RateOilChangePage = () => {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (event) => setRating(event.target.value);
  const divstyle =  {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp9098496.jpg")',
    backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundRepeat: 'no-repeat'

  }
  return (
    <div style={divstyle}>
    <div className="page-container" style={{margin:'300px',border:'1px solid black',borderRadius:'8px'}}>
      <header className="page-header">
        <h1>Rate Our Oil Change Service</h1>
      </header>
      <section className="page-content">
        <p>We value your feedback! Please rate our oil change service from 1 to 5 stars.</p>
        <div className="rating" style={{marginleft:'500px'}}>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            placeholder="Enter rating (1-5)"
          />
        </div>
        <button style={{backgroundColor:"#FFA52C",color:'black',width:'200px'}}>Submit Rating</button>
      </section>
      <footer className="page-footer">
        <button style={{backgroundColor:"#FFA52C",width:'200px'}}><Link to="/">Back to Home</Link></button>
      </footer>
      </div>
    </div>
  );
};
export default RateOilChangePage;
