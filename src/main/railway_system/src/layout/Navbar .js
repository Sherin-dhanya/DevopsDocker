import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return `${date}-${month}-${year}[${hours}:${minutes}:${seconds}]`;
}

  
  export default function Navbar() {
    const [currentDate] = useState(getDate());
    return (
      <div>
      <div className='Navbar' style={{ fontSize: 18 ,color:'black',padding:20}}>
      
        <ul className="nav justify-content-center">
        <Stack spacing={4} direction="row">
          <li className="nav-item">
          <a href='login'><Button variant="contained" type="submit" role='login'>LOGIN</Button></a>
          </li>
          <li className="nav-item">
          <a href='register'><Button variant="contained" type="registersubmit" role='register'>REGISTER</Button></a>
          </li>
          <li className="nav-item">
          <a href='home'><Button variant="outlined" role='traindetails'>TRAIN DETAILS</Button></a>
          </li>
          <li className="nav-item">
          <a href='home'><Button variant="outlined" role='contactus'>CONTACT US</Button></a>
          </li>
          <li className="nav-item " >
          <a href='home'><Button variant="outlined" role='dailydeals'>DAILY DEALS</Button></a>
          </li>
          <li className="nav-item">
          <a href='home'><Button variant="outlined" role='alerts'>ALERTS</Button></a>
          </li>
          <li className="nav-item " >
          <a href='adminlogin'><Button variant="contained" role='adminlogin'>ADMIN LOGIN</Button></a>
          </li>
          <li className="nav-item">
            {/* <h1>Today's Date</h1> */}
            <p>{currentDate}</p>
          </li>
          
</Stack>
        </ul>
        
      </div>
      </div>
    )
  }


