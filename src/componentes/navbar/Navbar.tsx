import React, { useState } from 'react'
import './Navbar.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl'
import MenuHamburger from './menuHamburger/MenuHamburger';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='nav'>
      <AutoAwesomeIcon style={{ fontSize: 40, color: "white" }} className='nav_logo' />
      <div className='menu'>
        <nav className='menu__principal'>
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
        </nav>
        <div className='menu__app'>
          <MenuHamburger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div onClick={() => setIsOpen(true)}>
            <SlMenu size={30} className="menu__icone" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar