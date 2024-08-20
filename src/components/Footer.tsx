import React from 'react';
import Logo from '../assets/image 22.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='grid grid-cols-3 bg-blue-900 p-5'>
        <div className='cols-span-1'>
          <img src={Logo} alt="Logo" />
          <p className='text-white text-xs'>Copyright &copy; 2023 PT Bogadang Anugrah Indonesia</p>
        </div>
        <div className='cols-span-1'>
          <p className='text-white font-bold text-xs p-2'>Contact Us</p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <p className='text-white font-bold text-xs p-2'>Email</p>
              <p className='text-white font-bold text-xs p-2'>: Manadong@gmail.com</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <p className='text-white font-bold text-xs p-2'>Telp</p>
              <p className='text-white font-bold text-xs p-2'>: +62-811-1009-115</p>
            </div>
          </div>
        </div>
        <div className='cols-span-1'>
          <p className='text-white font-bold text-xs p-2'>Available On</p>
          <p className='text-white text-xs p-2'>Grab Food</p>
          <p className='text-white text-xs p-2'>GoFood</p>
          <p className='text-white text-xs p-2'>Shopee Food</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
