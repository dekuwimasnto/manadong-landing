import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grab from '../assets/grabfod.png'
import Gofood from '../assets/gofood.png'
import Shopee from '../assets/shopee.png'

const OrderPage: React.FC = () => {
  const [previousURL] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    if (previousURL) {
      navigate('/order');
    } else {
      navigate('/');
    }
  };
  const grab = useState<string | null>(null);
  const grabClick = () => {
    if(grab){
        navigate('/outletg')
    }
  }
  const go = useState<string | null>(null);
  const goClick = () => {
    if(go){
        navigate('/outletj')
    }
  }
  const shopee = useState<string | null>(null);
  const shopeeClick = () => {
    if(shopee){
        navigate('/outlets')
    }
  }

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
        <p className="text-gray-500 text-sm mr-2">
          Order Now <a href={'/'} className="text-blue-600">{previousURL}</a>
        </p>
    </div>
    <div className='h-[63.1vh]'>
        <p className="font-bold text-blue-800 text-3xl mt-10 mb-20 flex justify-center items-center">Order Now On :</p>
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/3 md:w-1/4 lg:w-1/5 p-4">
                <img src={Grab} alt="Image 1" className="w-full mb-10" />
                <button className="mt-2 block mx-auto bg-blue-900 p-2 rounded-lg text-white" onClick={grabClick}>Order Now</button>
            </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <img src={Gofood} alt="Image 2" className="w-full mb-10" />
            <button className="mt-2 block mx-auto bg-blue-900 p-2 rounded-lg text-white" onClick={goClick}>Order Now</button>
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <img src={Shopee} alt="Image 3" className="w-full mb-24" />
            <button className="mt-2 block mx-auto bg-blue-900 p-2 rounded-lg text-white" onClick={shopeeClick}>Order Now</button>
        </div>
    </div>
    </div>
 </div>
  );
};

export default OrderPage;