import React from 'react';
import { SOCIAL_MEDIA_SHARE } from '../../../../constant';

import './styles.scss'

const ProductShare = () => {
  const renderedSocialMediaIcon = SOCIAL_MEDIA_SHARE.map((item) => (
    <div key={item.label} className='social-media__item'>
      {item.icon}
    </div>
  ));
  return (
    <div className='product-share'>
      <div className='product-share__label'>Share :</div>
      <div className='product-share__socialMedia'>
        {renderedSocialMediaIcon}
      </div>
    </div>
  );
};

export default ProductShare;
