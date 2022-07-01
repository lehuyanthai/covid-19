import { Rating } from 'react-simple-star-rating'
import Avatar from '../../../../../components/Avatar'

import './styles.scss'
import TimeAgo from './TimeAgo'

interface IReviewHead {
    avatar:string,
    author:string,
    rating: number,
    createdAt: Date
}

const ReviewHead = ({author,avatar,createdAt,rating}:IReviewHead) => {
  return (
    <div className='review-head'>
        <div className='review-head__author'>
          <Avatar image={avatar} size={77}/>
          <div className='review-head__author--info'>
            <div className='name'>{author}</div>
            <Rating fillColor='#FF6D33' readonly ratingValue={rating/5*100} size={16} />
          </div>
        </div>
        <TimeAgo createdAt={createdAt}/>
      </div>
  )
}

export default ReviewHead