
import ReviewHead from './ReviewHead';
import './styles.scss';

interface IReview {
  author: string,
  avatar: string,
  rating: number,
  createdAt: Date,
  content: string,
}

const Review = ({author,avatar,content,createdAt,rating}:IReview) => {
  return (
    <div className='review'>
      <ReviewHead author={author} avatar={avatar} createdAt={createdAt} rating={rating}/>
      <div className='review-content'>
        {content}
      </div>
    </div>
  );
};

export default Review;
