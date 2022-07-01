import React, { useEffect, useState } from 'react'
import StepProcessBar from '../../components/StepProcessBar'
import backToTop from '../../utils/backToTop';
import CheckoutStep from './CheckoutStep';

import './styles.scss'

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    backToTop();
  }, []);

  return (
    <div className='checkout'>
      <StepProcessBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <CheckoutStep currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  )
}

export default Checkout