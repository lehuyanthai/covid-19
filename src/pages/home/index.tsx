import React, { useEffect } from 'react';
import Canvas from './Canvas';
import Feedback from './Feedback';
import OurProduct from './OurProduct';
import ProductCollection from './ProductCollection';
import canvasBG1 from '../../assets/images/bg1.png';
import canvasBG2 from '../../assets/images/bg2.png';

import './styles.scss';
import backToTop from '../../utils/backToTop';

const Home = () => {
  useEffect(() => {
    backToTop();
  }, []);

  return (
    <div className='home'>
      <Canvas
      bigSizeTitle={true}
        background={canvasBG1}
        title='Protect Yourself 
From Virus.'
        description={`Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer tookng.`}
        buttonLabel='View Product'
        onClick={() => {}}
      />
      <ProductCollection />
      <OurProduct />
      <Canvas
        background={canvasBG2}
        title='Corona Health Protection Safety Kit.'
        description={`Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer tookng.`}
        buttonLabel='Buy now'
        onClick={() => {}}
      />
      <Feedback />
    </div>
  );
};

export default Home;
