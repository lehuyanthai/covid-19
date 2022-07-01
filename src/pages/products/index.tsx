import axios from 'axios';
import _, { intersection, uniq } from 'lodash';
import { useEffect, useState } from 'react';
import Grid from '../../components/Grid';
import { IProduct } from '../../components/ProductItem';
import Spinner from '../../components/Spinner';
import { API_ROOT, EMPTY_FILTER_DATA } from '../../constant';
import Filter from './filter';

import './styles.scss';

export type TTypes = number | string | string[];

export type TFilterOptionsDictionary = {
  [key: string]: TTypes;
};

export type TParameterNameOfFilterOpts = keyof typeof EMPTY_FILTER_DATA;

export type TFilterData = TFilterOptionsDictionary & {
  colors: string[];
  price: number;
  category: string;
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
    if (filters && _.size(filters) > 0) {
      const { category, colors: targetColors, price } = filters;

      const isInvalidFilter = _.isEqual(filters, EMPTY_FILTER_DATA);

      if (isInvalidFilter) {
        setFilterData(productData);
        return;
      }

      let filteredCategoryData: IProduct[] = productData;
      let filteredPriceData: IProduct[] = productData;
      let filteredColorData: IProduct[] = productData;
      if (category.length) {
        filteredCategoryData = productData.filter(
          (item) => item.category === category
        );
      }

      filteredPriceData = productData.filter((item) => item.price <= price);

      if (targetColors.length) {
        filteredColorData = [];
        targetColors.forEach((item) => {
          const colorData = productData.filter(({ colors }) =>
            colors.includes(item)
          );
          filteredColorData = uniq([...filteredColorData, ...colorData]);
        });
        console.log(filters.colors, filteredColorData);
      }

      const filterData = intersection(
        filteredCategoryData,
        filteredColorData,
        filteredPriceData
      );

      setFilterData(filterData);
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
              disable={false}
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
