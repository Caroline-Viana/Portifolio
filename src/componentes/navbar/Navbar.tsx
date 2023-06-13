import React from 'react'
import './Navbar.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <AutoAwesomeIcon style={{fontSize: 40, color: "white"}} className='nav_logo'/>
      <ul className='nav_link'>
        
        <Link to="/">
          <li className='nav_item'>Home</li>
        </Link>
        
        <Link to="/sobre">
          <li className='nav_item'>Sobre Mim</li>
        </Link>
        
        <Link to="/portifolio">
          <li className='nav_item'>Portifólio</li>
        </Link>
        
        <Link to="/contato">
          <li className='nav_item'>Contato</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Navbar