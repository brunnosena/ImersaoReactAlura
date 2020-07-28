import React from 'react';
import Logo from '../../assets/Logo.png';
import './menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BSFlix Logo" />
            </a>

            <Button as={Link} to="/cadastro/video"  className="ButtonLink">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;