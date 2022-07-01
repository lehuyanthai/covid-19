import Button from '../../../../components/Button';

import './styles.scss';

interface IProductCollectionItem {
  background:string,
}

const ProductCollectionItem = ({background}:IProductCollectionItem) => {
  return (
    <div className='product-collection-item'>
      <img src={background} alt='' />
      <div className='content'>
        <div className='content__name'>
          Health Security Mask Collection
        </div>
        <div className='content__sale-off'>20% Off</div>
        <Button
          children='View Now'
          onClick={() => {}}
          extraClass='content__btn'
        />
      </div>
    </div>
  );
};

export default ProductCollectionItem;
