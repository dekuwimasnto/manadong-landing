import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    imageSrc: string;
    detail: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageSrc, detail }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-black bg-white rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
                <img src={imageSrc} alt={title} className="w-full h-auto mb-2" />
                <h2 className="text-left text-xl font-semibold text-blue-800 pl-4">{title}</h2>
                <p className="p-4 text-wrap w-72">{detail}</p>
                {/* <p className="p-4 text-wrap w-72">Steamed rice, 2 pieces of corn fritters, and squid with back sauce.</p> */}
                <h2 className='text-red-500 p-4 font-semibold'>Rp. 40,000</h2>
            </div>
        </div>
    );
};

export default Modal;
