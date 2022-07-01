import clsx from 'clsx';
import { useCallback } from 'react';
import { TParameterNameOfFilterOpts, TTypes } from '../../../pages/products';

import './styles.scss';

export interface IMultipleColor {
  disable:boolean;
  colors: string[];
  selectedColors: string[];
  setSelectedColors: (
    type: TParameterNameOfFilterOpts,
    value: TTypes
  ) => void;
}

const MultipleColor = ({
  disable,
  colors,
  selectedColors,
  setSelectedColors,
}: IMultipleColor) => {
  const isSelected = useCallback(
    (color: string) => {
      return selectedColors.includes(color);
    },
    [selectedColors]
  );

  const onChange = (color: string) => {
      if (isSelected(color)) {
        const updatedColors = selectedColors.filter((item) => item !== color);
        setSelectedColors('colors', updatedColors);
      } else {
        setSelectedColors('colors', [...selectedColors, color]);
      }
  };

  const handleClick = (item: string) => {
    if(disable) return
    onChange(item);
  };

  const renderedMultipleColor = () => {
    return colors.map((item) => (
      <div
        key={item}
        className={clsx({
          'list-color__item': true,
          'disable':disable,
          selected: isSelected(item),
        })}
        style={{ backgroundColor: item }}
        onClick={() => handleClick(item)}
      ></div>
    ));
  };

  return <div className='list-color'>{renderedMultipleColor()}</div>;
};

export default MultipleColor;
