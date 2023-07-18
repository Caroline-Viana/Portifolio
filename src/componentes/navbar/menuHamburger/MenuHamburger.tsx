import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import './MenuHamburger.css'

interface Props {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuHamburger({ isOpen, setIsOpen }: Props) {

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            {isOpen === true ? (
                <div className='container'>
                    <div className='menu__close' onClick={() => setIsOpen(false)}>
                        <MdClose size={45} className="menu__close__icon" />
                    </div>
                    <nav className='nav_app'>
                        <ul className='nav_app_link' onClick={() => setIsOpen(false)}>

                            <Link to="/">
                                <li className='nav_app_item'>Home</li>
                            </Link>

                            <Link to="/sobre">
                                <li className='nav_app_item'>Sobre Mim</li>
                            </Link>

                            <Link to="/portifolio">
                                <li className='nav_app_item'>Projetos</li>
                            </Link>

                            <Link to="/contato">
                                <li className='nav_app_item'>Contato</li>
                            </Link>

                        </ul>
                    </nav>
                </div>) : ""}
        </>
    )
}

export default MenuHamburger