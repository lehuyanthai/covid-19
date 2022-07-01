import React from 'react';
import { TFilterData, TParameterNameOfFilterOpts, TTypes } from '..';
import ListColor from '../../../components/ListColor/ListColor';
import MultipleColor from '../../../components/ListColor/MultipleColor';
import { COLORS } from '../../../constant';
import FilterCategory from './Category';
import PriceRange from './PriceRange';

import './styles.scss';

export interface IFilter {
  disable: boolean;
  smallSize?: boolean;
  filterValues: TFilterData;
  changeFilterValues: (type: TParameterNameOfFilterOpts, value: TTypes) => void;
}

const Filter = ({
  disable,
  smallSize,
  filterValues,
  changeFilterValues,
}: IFilter) => {
  return (
    <div className='filter'>
      <div className='filter__label filter-item'>Category</div>
      <FilterCategory
        selectedCategory={filterValues.category}
        setSelectedCategory={changeFilterValues}
      />
      <div className='filter__label filter-item'>Color</div>
      <div className='filter-item filter__has-pd'>
        {/* <ListColor
          disable={disable}
          selectedColors={filterValues.color}
          setSelectedColors={changeFilterValues}
          multiSelect
          colors={COLORS}
          smallSize
        /> */}
        <ListColor>
          <MultipleColor
            colors={COLORS}
            selectedColors={filterValues.color||[]}
            setSelectedColors={changeFilterValues}
            disable={disable}
          />
        </ListColor>
      </div>
      <div className='filter__label filter-item'>Price Range</div>
      <div className='filter-item filter__has-pd'>
        <PriceRange
          disable={disable}
          priceRange={filterValues.price||0}
          setPriceRange={changeFilterValues}
        />
      </div>
    </div>
  );
};

export default Filter;
