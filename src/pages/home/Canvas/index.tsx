import React from 'react';
import { boolean } from 'yup';
import CanvasContent from './CanvasContent';

import './styles.scss';

interface ICanvas {
  bigSizeTitle?: boolean;
  background: string;
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

const Canvas = ({
  bigSizeTitle = false,
  background,
  title,
  description,
  buttonLabel,
  onClick,
}: ICanvas) => {
  return (
    <div className='canvas'>
      <img src={background} alt='' />
      <CanvasContent
        bigSizeTitle={bigSizeTitle}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        onClick={() => {}}
      />
    </div>
  );
};

export default Canvas;
