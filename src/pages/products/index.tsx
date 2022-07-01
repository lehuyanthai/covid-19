import axios from 'axios';
import _, { filter } from 'lodash';
import { useEffect, useState } from 'react';
import Grid from '../../components/Grid';
import { IProduct } from '../../components/ProductItem';
import Spinner from '../../components/Spinner';
import { API_ROOT, COLORS, EMPTY_FILTER_DATA } from '../../constant';
import Filter from './filter';

import './styles.scss';

export type TTypes = number | string | string[] | null;

export type TFilterOptionsDictionary = {
  [key: string]: TTypes;
};

export type TParameterNameOfFilterOpts = keyof typeof EMPTY_FILTER_DATA;

export type TFilterData = TFilterOptionsDictionary & {
  color: string[] | null;
  price: number | null;
  category: string | null;
};

const Products = () => {
  const [filters, setFilters] = useState<TFilterData>(EMPTY_FILTER_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [filterData, setFilterData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const URL = API_ROOT + '/products';

      try {
        const res = await axios.get(URL);
        setProductData(res.data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(productData);
    console.log(filters);

    // const newFilterData = productData;
    // _.chain(newFilterData).filter()
    // _.filter(newFilterData,{category:filters.category})

    if (filters && _.size(filters) > 0) {
      const isInvalidFilter = _.values(filters).every((value) => !value);
      console.log(isInvalidFilter);

      if (isInvalidFilter) {
        setFilterData(productData);
        return;
      }

      const { category, color: targetColors, price } = filters;

      // ? 1,2,3

      const primaryData = productData.filter(
        (item) => item.category === category ?? ''
      );
      console.log(primaryData);

      const secondFloor = primaryData.filter(
        (item) => item.price <= (price ?? 100)
      );
      // .filter((item) => item.price <= filters.price || 0);
      console.log(secondFloor);

      let finalResult: IProduct[] = [];

      _.forEach(secondFloor, (item) => {
        const { colors: sourceColors } = item;
        _.forEach(sourceColors, (color) => {
          if (targetColors && _.size(targetColors) > 0) {
            if (targetColors.includes(color)) {
              finalResult.push(item);
            }
          } else {
            finalResult.push(item);
          }
        });
      });

      finalResult = _.uniq(finalResult);
      console.log(finalResult);

      setFilterData(finalResult);
    }
  }, [filters, productData]);

  const renderedContent = () => {
    if (isLoading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    return filterData && filterData.length ? (
      <Grid data={filterData} />
    ) : (
      <div>No result</div>
    );
  };

  function changeFilterValues(type: TParameterNameOfFilterOpts, value: TTypes) {
    const newFilters = { ...filters };
    newFilters[type as string] = value;
    setFilters(newFilters);
  }

  return (
    <div className='products'>
      <div className='products__header'>
        <div className='products__header--title'>Our Product</div>
        <div className='products__header--description'>Home / Our product</div>
      </div>
      <div className='products__section'>
        <div className='products__section--content'>
          <div className='filter-container'>
            <Filter
              disable={_.size(filterData) === 0}
              smallSize
              filterValues={filters}
              changeFilterValues={changeFilterValues}
            />
          </div>
          <div className='grid-products'>{renderedContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
