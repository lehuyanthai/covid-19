import clsx from 'clsx';
import React, { SetStateAction } from 'react';

interface IDetailProductContentPreview {
  listImage: string[];
  selectedImage: string;
  setSelectedImage: React.Dispatch<SetStateAction<string>>;
}

const DetailProductContentPreview = ({
  listImage,
  selectedImage,
  setSelectedImage,
}: IDetailProductContentPreview) => {
  const renderedListImage = listImage.map((item, index) => (
    <div
      key={index}
      className={clsx({
        image: true,
        "selected-image": item === selectedImage,
      })}
      onClick={()=>setSelectedImage(item)}
    >
      <img src={item} alt='' />
    </div>
  ));
  return (
    <div className='detail-product-content__preview'>
      <div className='detail-product-content__preview--images'>
        {renderedListImage}
      </div>
      <div className='detail-product-content__preview--selectedImage'>
        <img src={selectedImage} alt='' />
      </div>
    </div>
  );
};

export default DetailProductContentPreview;
