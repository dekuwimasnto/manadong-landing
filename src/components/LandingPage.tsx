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
import ReviewComponent from './ReviewComponent';

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
        <section className="flex-1 p-10 bg-gray-100">
            <h2 className="font-semibold mb-4 text-blue-800 p-5">Our Menu</h2>
            <div className="flex flex-wrap justify-center">
                <div className="text-center p-4">
                    <img src={ayamRica} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Ayam Rica</p>
                </div>
                <div className="text-center p-4">
                    <img src={cumiHitam} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Cumi Hitam</p>
                </div>
                <div className="text-center p-4">
                    <img src={cakalang} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Cakalang Tinorasak</p>
                </div>
                <div className="text-center p-4">
                    <img src={perkedel} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Perkedel Jagung</p>
                </div>
                <div className="text-center p-4">
                    <img src={ayamWoku} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Ayam Woku</p>
                </div>
                <div className="text-center p-4">
                    <img src={lauk} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Lauk Frozen</p>
                </div>
                <div className="text-center p-4">
                    <img src={rabe} alt="Makanan" className="w-auto h-auto" />
                    <p className="font-bold text-xs">Cakalang Rabe</p>
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
                    <div className='w-[150px]'>
                        <h6 className='text-xs'>Buy 2 and get 1 free. applicable to select variants</h6>
                    </div> 
                </div>
                <div className="bg-white p-4 rounded-lg">
                    <img src={twenty} alt="Deal" className='w-[100px] h-[100px] mb-10'/>
                    <p className="text-blue-800 font-bold">Discount 20%</p>
                    <div className='w-[150px]'>
                        <h6 className='text-xs white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;'>Get a 20% discount on all purchases this weekend. Minimum purchase Rp.50.000</h6>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                    <img src={bundle} alt="Deal" className='w-[100px] h-[100px] mb-10'/>
                    <p className="text-blue-800 font-bold">Bundle Deal</p>
                    <div className='w-[150px]'>
                        <h6 className='text-xs white-space: nowrap'>Purchase Ayam Woku and Ayam Rica can save 30% on the total cost.</h6>
                    </div>
                </div>
            </div>
        </section>
        {/* REVIEW */}
        <section className="p-10 bg-blue-100">
            <ReviewComponent/>
        </section>
        {/* LOCATION */}
        <section className="grid grid-cols-3 gap-4 p-10 items-center bg-white">
            <div className="col-span-3 font-bold text-blue-800 p-5">
                Locations
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Senopati, Petogogan</p>
                        <h2 className="text-xs">Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku No.1, Petogogan, Jakarta Selatan</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Kebun Jeruk / Tanjung Duren</p>
                        <h2 className="text-xs">Komplek Ruko Greenville Maisonet, Blok C Nomor 9, RT.7/RW.5 North Tanjung Duren, Jakarta Barat</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Food Plaza PIK</p>
                        <h2 className="text-xs">Food Plaza PIK FMA-1G, Kamel Muara, Panjaringan, Jakarta Utara</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Kuningan - D'Kanteen</p>
                        <h2 className="text-xs">D'Kanteen, Jl. Komando Raya, No.18, DKI Jakarta 12920</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Bintaro, Thelapan Square</p>
                        <h2 className="text-xs">Jl. Jurang Mangga Baru, No.38, Kota Tangerang Selatan, Banten</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Gading Serpong</p>
                        <h2 className="text-xs">Ruko Garden 8, Jl. Ki Hajar Dewantara, Jl. Boulevard Raya Sepong No. 25, ...</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Cipete</p>
                        <h2 className="text-xs">Jl. Cipete Raya, No.74c, RW.3, Cipete, Jakarta Selatan 12410</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-white flex items-center p-4 shadow-lg">
                    <div className="bg-orange-200 w-min h-min rounded-lg p-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-blue-800 font-bold">Menteng</p>
                        <h2 className="text-xs">Jl. H. Agus Salim, No.60, Menteng, Jakarta Pusat, 10350</h2>
                        <div className="flex items-center mt-5 underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-orange-600 underline">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <a href="" className="text-red-400 font-bold">View Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

  );
}

export default LandingPage;
