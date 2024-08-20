import React from 'react';
import Background from '../assets/image 14.png'
import ayamRica from '../assets/image 21.png'
import cumiHitam from '../assets/Cumi Hitam.png'
import cakalang from '../assets/Cakalang Tinorasak.png'
import perkedel from '../assets/image 17.png'
import ayamWoku from '../assets/Ayam Woku.png'
import lauk from '../assets/image 19.png'
import rabe from '../assets/image 16.png'
import buy2 from '../assets/buy2.png'
import twenty from '../assets/20percent.png'
import bundle from '../assets/bundle.png'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-red-200">
        {/* MANADONG */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 text-red-500">Manadong</h1>
                <p className="text-lg mb-5 grid grid-cols-2">is a Manado dish with a spicy and appetizing flavour.</p>
                <p className="text-lg mb-10 mt-3 text-red-500 font-bold">#NikmatnyaGaPakeRibet</p>
                <div className='grid grid-cols-2'>
                    <button className="text-blue-800 font-bold py-2 px-4 rounded outline">Order Now</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={Background} alt='Makanan' className='w-full h-auto max-w-full max-h-full'></img>
            </div>
        </section>
        {/* OUR MENU */}
        <section className="flex-1 p-8 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Our Menu</h2>
            <div className='grid grid-cols-4 gap-2 p-4'>
                <div className='col-span-1 p-2 text-center'>
                    <img src={ayamRica} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Ayam Rica</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={cumiHitam} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Cumi Hitam</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={cakalang} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Cakalang Tinorasak</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={perkedel} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Perkedel Jagung</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={ayamWoku} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Ayam Woku</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={lauk} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Lauk Frozen</p>
                </div>
                <div className='col-span-1 p-2 text-center'>
                    <img src={rabe} alt='Makanan' className='w-full h-auto' />
                    <p className='font-bold text-xs'>Cakalang Rabe</p>
                </div>
            </div>
            {/* BUTTON OUR MENU */}
            <div className='flex justify-center items-center'>
                <button className="text-blue-800 font-bold py-2 px-4 rounded outline">Order Now</button>             
            </div>
        </section>
        {/* PROMOTION */}
        <section className="flex justify-between p-10 items-center bg-red-100">
            <div className="flex-shrink-0">
                <p className="text-blue-800 font-bold p-5">Promotion</p>
            </div>
            <div className="flex space-x-4">
                <div className="bg-white p-4 rounded-lg">
                    <img src={buy2} alt="Deal" className='w-[120px] h-[120px] mb-5'/>
                    <p className="text-blue-800 font-bold">Buy 2 Get 1</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                    <img src={twenty} alt="Deal" className='w-[100px] h-[100px] mb-10'/>
                    <p className="text-blue-800 font-bold">Discount 20%</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                    <img src={bundle} alt="Deal" className='w-[100px] h-[100px] mb-10'/>
                    <p className="text-blue-800 font-bold">Bundle Deal</p>
                </div>
            </div>
        </section>
    </div>

  );
}

export default LandingPage;
