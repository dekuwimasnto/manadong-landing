import React, { useState } from 'react';
import Modal from './Modal';
import ayamRica from '../assets/image 21.png'
import cumiHitam from '../assets/Cumi Hitam.png'
import cakalang from '../assets/Cakalang Tinorasak.png'
import perkedel from '../assets/image 17.png'
import ayamWoku from '../assets/Ayam Woku.png'
import lauk from '../assets/image 19.png'
import rabe from '../assets/image 16.png'

const FoodGrid: React.FC = () => {
    const [selectedFood, setSelectedFood] = useState<{ title: string, imageSrc: string, detail: string } | null>(null);

    const foods = [
        { title: 'Ayam Rica', imageSrc: ayamRica, detail: 'Ayam Dipotong Kecil Kecil'},
        { title: 'Cumi Hitam', imageSrc: cumiHitam, detail: 'Steamed rice, 2 pieces of corn fritters, and squid with back sauce.' },
        { title: 'Cakalang Tinorasak', imageSrc: cakalang,detail: 'Detail makanan cakalang tinorasak' },
        { title: 'Perkedel Jagung', imageSrc: perkedel, detail: 'Perkedel dibuat pake jagung'},
        { title: 'Ayam Woku', imageSrc: ayamWoku, detail: 'ayam woku woku japan i guess' },
        { title: 'Lauk Frozen', imageSrc: lauk, detail: 'makanan dingin' },
        { title: 'Cakalang Rabe', imageSrc: rabe, detail: 'cakalang rabe detailnya disini.' },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {foods.map((food) => (
                <div key={food.title} className="text-center p-4">
                    <img
                        src={food.imageSrc}
                        alt={food.title}
                        className="w-auto h-auto cursor-pointer"
                        onClick={() => setSelectedFood(food)}
                    />
                    <p className="font-semibold text-xs">{food.title}</p>
                    {/* <p className='font-bold text-xs'>{food.detail}</p> */}
                </div>
            ))}

            {selectedFood && (
                <Modal
                    isOpen={!!selectedFood}
                    onClose={() => setSelectedFood(null)}
                    title={selectedFood.title}
                    imageSrc={selectedFood.imageSrc}
                    detail={selectedFood.detail}
                />
            )}
        </div>
    );
};

export default FoodGrid;
