import clsx from 'clsx';
import React from 'react';

import './styles.scss';

export interface ISingleColor {
  colors: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const SingleColor = ({
  colors,
  selectedColor,
  setSelectedColor,
}: ISingleColor) => {
  const onChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleClick = (item: string) => {
    onChange(item);
  };

  const renderedSingleColor = () => {
    return colors.map((item) => (
      <div
        key={item}
        className={clsx({
          'list-color__item': true,
          'small-size': true,
          selected: item === selectedColor,
        })}
        style={{ backgroundColor: item }}
        onClick={() => handleClick(item)}
      ></div>
    ));
  };

  return <div className='list-color'>{renderedSingleColor()}</div>;
};

export default SingleColor;
