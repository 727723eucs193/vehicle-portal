import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import './Details.css'
function Details() {
  
  return (
    <div >
      <div>
        <h1 style={{textAlign:'center',marginTop:'90px'}}>Secure Your Appointment with Our Top Specialists!!!</h1>
      </div>
        <div style={{margin:'200px',border:'1px solid lightgrey',height:'300px',width:'900px',display:'flex',boxShadow:'4px 4px lightgrey',borderRadius:'8px'}}>
          <div style={{paddingTop:'1px'}}>
          <img src='https://th.bing.com/th/id/OIP.4QopavoDcL4KOI4ZhctuOwHaE8?rs=1&pid=ImgDetMain' style={{borderRadius:'50%',height:'200px',width:'200px',margin:'60px'}}></img>
          </div>
          <div style={{paddingLeft:'150px',paddingTop:'50px',
          }}>
          <h3>Name: John Patrick</h3>
          <h3>Job: Technician</h3>
          <h3>Year Of Experience: 9 years</h3>
         <button type='submit' style={{backgroundColor:'#F9B0BB',color:'black'}} ><Link to="/appoint">Book An Appointment</Link></button>
          </div>
        </div>
        <div style={{margin:'200px',border:'1px solid lightgrey',height:'300px',width:'900px',display:'flex',boxShadow:'4px 4px lightgrey',borderRadius:'8px'}}>
          <div style={{paddingTop:'1px'}}>
          <img src='https://th.bing.com/th/id/OIP.6NmwX9ac_YFP-fmmY2vxggHaEK?rs=1&pid=ImgDetMain' style={{borderRadius:'50%',height:'200px',width:'200px',margin:'60px'}}></img>
          </div>
          <div style={{paddingLeft:'150px',paddingTop:'50px',
          }}>
          <h3>Name: Angelina Thomas</h3>
          <h3>Job: Auto mechanic</h3>
          <h3>Year Of Experience: 4 years</h3>
          <button type='submit' style={{backgroundColor:'#F9B0BB',color:'black'}}><Link to='/appoint'>Book An Appointment</Link></button>
          </div>
        </div>
        <div style={{margin:'200px',border:'1px solid lightgrey',height:'300px',width:'900px',display:'flex',boxShadow:'4px 4px lightgrey',borderRadius:'8px'}}>
          <div style={{paddingTop:'1px'}}>
          <img src='https://th.bing.com/th/id/OIP.3AcQb0JD1GhCEW9KLIrOxgHaFj?rs=1&pid=ImgDetMain' style={{borderRadius:'50%',height:'200px',width:'200px',margin:'60px'}}></img>
          </div>
          <div style={{paddingLeft:'150px',paddingTop:'50px',
          }}>
          <h3>Name: Austin Sebestian</h3>
          <h3>Job: Chief Mechanic</h3>
          <h3>Year Of Experience: 13 years</h3>
          <button type='submit' style={{backgroundColor:'#F9B0BB',color:'black'}}><Link to='/appoint'>Book An Appointment</Link></button>
          </div>
        </div>
        <div style={{margin:'200px',border:'1px solid lightgrey',height:'300px',width:'900px',display:'flex',boxShadow:'4px 4px lightgrey',borderRadius:'8px'}}>
          <div style={{paddingTop:'1px'}}>
          <img src='https://th.bing.com/th/id/OIP.cIe_gNpy1StVRsDfrwBaGAHaE8?rs=1&pid=ImgDetMain' style={{borderRadius:'50%',height:'200px',width:'200px',margin:'60px'}}></img>
          </div>
          <div style={{paddingLeft:'150px',paddingTop:'50px',
          }}>
          <h3>Name: Tom Hancks</h3>
          <h3>Job: Auto Mechanic</h3>
          <h3>Year Of Experience: 8 years</h3>
          <button type='submit' style={{backgroundColor:'#F9B0BB',color:'black'}}><Link to='/appoint'>Book An Appointment</Link></button>
          </div>
        </div>
    </div>
  )
};

export default Details
