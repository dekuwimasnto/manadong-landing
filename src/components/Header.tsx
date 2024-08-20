import React from 'react';
import Logo from '../assets/image 22.svg'

const Header: React.FC = () => {
  return (
    <header className='bg-blue-900'>
      <nav>
        <div>
          <img src={Logo}></img>
        </div>
        <ul className='text-white p-5 end'>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
