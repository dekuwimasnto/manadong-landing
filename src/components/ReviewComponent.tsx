import React, { useState } from 'react';

interface Review {
  name: string;
  comment: string;
}

const reviewsData: Review[] = [
  { name: 'Jennifer', comment: 'Such a good value for your money. Really good Manadonese food. Well recommended!' },
  { name: 'A*****a', comment: 'Cakalangnya terbaikkkkkkkk, the best cakalang everrrr' },
  { name: 'Nadia', comment: 'Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.., beres deh tangung jawab' },
  { name: 'Dwi Rianto', comment: 'TOP MARKOTOP!' },
  { name: 'Rianto Dwi', comment: 'MANADONG INI KELAS BANGET SIH BRO, HIGHLY RECOMMENDED!!!' },
  { name: 'Dekuwimasnto', comment: 'Lumayan' },
];

const ReviewComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <section className=" bg-blue-100">
      <div>
        <p className="text-blue-800 font-semibold p-5">Review</p>
      </div>
      <div className='grid grid-cols-3 bg-blue-100 gap-4'>
        {currentReviews.map((review, index) => (
          <div key={index} className='bg-white p-5 rounded cols-span-1'>
            <h2 className='text-blue-800'>{review.name}</h2>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          &lt;
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ReviewComponent;