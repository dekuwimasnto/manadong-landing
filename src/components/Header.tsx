import React from 'react';
import Logo from '../assets/image 22.svg'

const Header: React.FC = () => {
  return (
    <header className='bg-blue-900 flex justify-between items-center p-4'>
      <div className='flex-shrink-0'>
          <img src={Logo} alt='Logo'></img>
        </div>
      <nav>
        <ul className='text-white flex space-x-4'>
          <li><a href="/">Home</a></li>
          <li><a href="#features">Eatery</a></li>
          <li><a href="#contact">News</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
