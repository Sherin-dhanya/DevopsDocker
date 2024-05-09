import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function AdminPage() {
  return (
    <div>
      <div className='Navbar' style={{ fontSize: 18 ,color:'black',padding:20}}>
      
      <ul class="nav justify-content-center">
      <Stack spacing={4} direction="row">
        <li class="nav-item">
        <a href='login'><Button variant="contained">USER DETAILS</Button></a>
        </li>
        <li class="nav-item">
        <a href='register'><Button variant="outlined">TRAIN DETAILS</Button></a>
        </li>
        <li class="nav-item">
        <a href='home'><Button variant="contained">BOOKING DETAILS</Button></a>
        </li>
        
        
        
</Stack>
      </ul>
      
    </div>
    </div>
  )
}
