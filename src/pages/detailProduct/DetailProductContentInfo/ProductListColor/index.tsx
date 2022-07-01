import React, { SetStateAction } from 'react';
import ListColor from '../../../../components/ListColor/ListColor';
import SingleColor from '../../../../components/ListColor/SingleColor';

import './styles.scss';

interface IProductListColor {
  disable: boolean;
  colors: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<SetStateAction<string>>;
}

const ProductListColor = ({
  disable,
  colors,
  selectedColor,
  setSelectedColor,
}: IProductListColor) => {
  return (
    <div className='product-listColor'>
      <div className='product-listColor__label'>Color :</div>
      {/* <ListColor
      disable={disable}
        colors={colors}
        smallSize
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      /> */}
      <ListColor>
        <SingleColor
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </ListColor>
    </div>
  );
};

export default ProductListColor;
