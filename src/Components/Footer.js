import React, { useState } from 'react';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';



export default function Footer() {

  return (
    <>
    <hr/>
    <div>
    <Container className="d-flex align-items-center" style={{ width: '100%'}}>
          <Link to="/home"><PeopleOutlineIcon style={{ fontSize: '40px', marginLeft: '80px', marginRight: '310px' ,color:'#66CDAA'}} className='icon1'></PeopleOutlineIcon></Link>
          <PermIdentityIcon style={{ fontSize: '40px', marginRight: '250px' ,color:'#66CDAA'}}  className="icon2" />
          <BrokenImageIcon style={{ fontSize: '40px', marginRight: '260px',color:'#66CDAA' }} className="icon3"/>
          <Link to="/account"><InsertEmoticonIcon style={{ fontSize: '40px' ,color:'#66CDAA'}} className="icon4" /></Link>
        </Container>
        <div className="d-flex align-items-center" style={{ width: '100%' ,display:'flex'}}>
         <p style={{ marginLeft: '190px', marginRight: '50px'}}>Groups</p>
         <p style={{marginLeft:'250px'}}>Friends</p>
         <p style={{marginLeft:'240px'}}>Activity</p>
         <p style={{marginLeft:'250px'}}>Account</p>
        </div>
        </div>
    
    </>
    
  )
}
