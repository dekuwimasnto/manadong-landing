import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import duaAyam from '../assets/image 14.png'

const About: React.FC = () => {
  const [previousURL] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    if (previousURL) {
      navigate('/order');
    } else {
      navigate('/order');
    }
  };
  return (
    <div className="flex flex-col items-center min-w-full min-h-full p-5">
      <div className="flex w-full p-2 rounded-xl outline-slate-200 outline mt-5">
          <button onClick={handleBackButtonClick} className="text-orange-600 text-sm inline-flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 inline-flex mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back
          </button>
          <p className="text-gray-500 text-sm mr-2">
            | <a href={'/'} className="">{previousURL}</a>
          </p>
          <p className="text-blue-500 text-sm mr-2">
            Home <a href={'/'} className="">{previousURL}</a>
          </p>
          <p className="text-gray-500 text-sm mr-2">
            / <a href={'/'} className="">{previousURL}</a>
          </p>
          <p className="text-blue-500 text-sm mr-2">
            Order Now <a href={'/'} className="">{previousURL}</a>
          </p>
          <p className="text-gray-500 text-sm mr-2">
            / <a href={'/'} className="">{previousURL}</a>
          </p>
          <p className="text-gray-500 text-sm mr-2">
            GoFood Outlet <a href={'/'} className="text-blue-600">{previousURL}</a>
          </p>
      </div>
      <div className=''>
        <div className='p-2 mt-5'>
          <p className='text-blue-900 font-semibold text-xl'>About Us</p>
        </div>
        <div className='grid grid-cols-2 p-2 mt-10'>
          <div className='cols-span-1 w-[75%]'>
            <img src={duaAyam} alt="makanan" />
          </div>
          <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1'>
                <p className='font-semibold text-2xl mb-5'>About Our Company</p>
                <h2 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas quis aperiam sed enim quasi, velit, ad eligendi cumque atque asperiores accusantium consequatur nisi officiis, nobis suscipit at doloremque reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, laudantium dolorum provident quae expedita, similique non culpa cumque, rerum explicabo officia atque placeat ipsa eveniet iste dolores eos et vel?</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;