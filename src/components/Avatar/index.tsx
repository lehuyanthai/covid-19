import React from 'react';
import './styles.scss'
const DEFAULT_IMAGE = "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png"
interface IAvatar {
    image: string;
    size:number;
}
const Avatar = ({image,size}:IAvatar) => {
  return (
    <div className='avatar'>
      <img src={image.length>0?image:DEFAULT_IMAGE} alt='' style={{height:`${size}px`,width:`${size}px`}}/>
    </div>
  );
};

export default Avatar;
