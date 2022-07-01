import clsx from 'clsx';
import { TParameterNameOfFilterOpts, TTypes } from '../..';
import { CATEGORIES } from '../../../../constant';
import { AddIcon } from '../../../../icons';

import './styles.scss';

interface IFilterCategory {
  selectedCategory: string;
  setSelectedCategory: (
    type: TParameterNameOfFilterOpts,
    value: TTypes
  ) => void;
}

const FilterCategory = ({
  selectedCategory,
  setSelectedCategory,
}: IFilterCategory) => {
  const handleClick = (category: string) => {
    if (selectedCategory !== category) {
      setSelectedCategory('category', category);
    } else {
      setSelectedCategory('category', '');
    }
  };
  const renderedCategories = CATEGORIES.map((item) => (
    <div
      className='filter-category__item filter-item'
      key={item.name}
      onClick={() => handleClick(item.name)}
    >
      <div
        className={clsx({
          'filter-category__item--label': true,
          'category-selected': item.name === selectedCategory,
        })}
      >
        {item.label}
      </div>
      <AddIcon />
    </div>
  ));

  return <div className='filter-category'>{renderedCategories}</div>;
};

export default FilterCategory;
