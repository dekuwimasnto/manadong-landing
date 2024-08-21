import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import duaAyam from '../assets/image 14.png'

const OutletGojek: React.FC = () => {
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
          <p className='text-blue-900 font-semibold text-xl'>GoFood Outlet</p>
        </div>
        <div className='grid grid-cols-2 p-2 mt-10'>
          <div className='cols-span-1'>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Senopati, Petogogan</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>
            
            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Kebun Jeruk / Tanjung Duren</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Food Plaza PIK</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Kuningan - D'Kanteen</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Bintaro, Thelapan Square</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Gading Serpong</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Cipete</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

            <div className='grid grid-cols-2 gap-10 p-2 rounded whitespace-break-spaces'>
              <div className='cols-span-1 font-semibold'>
                <p>Menteng</p>
              </div>
              <div className='cols-span-1'>
                <p className='text-orange-600 font-semibold inline-block mr-2'>Purchase Here</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-orange-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              {/* <hr className='size=2'/> */}
            </div>

          </div>
          <div className='cols-span-1 w-[75%]'>
            <img src={duaAyam} alt="makanan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletGojek;