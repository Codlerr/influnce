import React, { useState } from 'react';
import det1 from '../../assets/det1.png';
import det2 from '../../assets/det2.png';
import det3 from '../../assets/det3.png';
import det4 from '../../assets/det4.png';

function ProdImage() {
  const [selectedImage, setSelectedImage] = useState(det4);

  const images = [det1, det2, det3, det4];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='flex ml-20 mt-10 mb-0 h-screen'>
      <div className='mr-8'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            className={`h-32 cursor-pointer mb-8 ${selectedImage === image ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div>
        <img
          src={selectedImage}
          alt=''
          className='h-screen ml-10'
        />
      </div>
    </div>
  );
}

export default ProdImage;
