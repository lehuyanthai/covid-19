import axios from 'axios';
import clsx from 'clsx';
import React, { SetStateAction, useEffect, useState } from 'react';
import { DESCRIPTION_PRODUCT_TAB } from '../../../constant';
import AddComment from './addComment';
import Review from './review';
import './styles.scss';

interface IDetailProductDescription {
  productId: string;
  currentTab: string;
  setCurrentTab: React.Dispatch<SetStateAction<string>>;
}

interface IReview {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  rating: number;
  createdAt: string;
  content: string;
}

const DetailProductDescription = ({
  productId,
  currentTab,
  setCurrentTab,
}: IDetailProductDescription) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [addComment, setAddComment] = useState<string>('')

  useEffect(() => {
    const fetchComments =async () => {
      const res = await axios
      .get(`http://localhost:8000/comments?idProduct=${productId}`)
      setReviews(res.data)
    }
    fetchComments()
  }, [productId,addComment]);

  const renderedDescriptionProductTab = DESCRIPTION_PRODUCT_TAB.map((item) => (
    <div
      className={clsx({
        'detail-product-description__header--item': true.valueOf,
        selected: currentTab === item.key,
      })}
      key={item.key}
      onClick={() => setCurrentTab(item.key)}
    >
      {item.label}
    </div>
  ));

  const renderedReviews = reviews.map((item, index) => (
    <Review
      key={index}
      author={item.author}
      avatar={item.avatar}
      content={item.content}
      createdAt={new Date(item.createdAt)}
      rating={item.rating}
    />
  ));
  return (
    <div className='detail-product-description'>
      <div className='detail-product-description__header'>
        {renderedDescriptionProductTab}
      </div>
      {currentTab === 'description' && <div>description</div>}
      {currentTab === 'information' && <div>information</div>}
      {currentTab === 'review' && (
        <div className='detail-product-description__reviews'>
          {renderedReviews}
          <AddComment productId={productId} setNewComment={setAddComment}/>
        </div>
      )}
    </div>
  );
};

export default DetailProductDescription;
