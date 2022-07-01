import clsx from 'clsx';
import React, { Fragment, SetStateAction } from 'react';
import BorderCircle from '../BorderCircle';

import './styles.scss';

interface IStepProcessBar {
  currentStep: number;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
}

const StepProcessBar = ({ currentStep, setCurrentStep }: IStepProcessBar) => {
  const renderedStep = ['Your address', 'Payment method', 'Delivery'].map(
    (item, index) => (
      <Fragment key={item}>
        <div className='process__step'>
          <BorderCircle
            active={index <= currentStep}
            itemIndex={index}
            setItemActive={setCurrentStep}
          />
          <div className='process__step--label'>{item}</div>
        </div>
        {index < 2 && (
          <div
            className={clsx({
              process__line: true,
              'line-active': index + 1 <= currentStep,
            })}
          />
        )}
      </Fragment>
    )
  );

  return (
    <>
      <div className='process'>{renderedStep}</div>
    </>
  );
};

export default StepProcessBar;
