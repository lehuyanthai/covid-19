import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { uniqueId } from 'lodash';
import { SetStateAction, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import * as Yup from 'yup';
import { API_ROOT } from '../../../../constant';
import { useAppSelector } from '../../../../hooks/useAppSelector';

import './styles.scss';

interface IAddComment {
  productId: string;
  setNewComment: React.Dispatch<SetStateAction<string>>;
}

const AddComment = ({ productId, setNewComment }: IAddComment) => {
  const [rating, setRating] = useState<number>(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const user = useAppSelector((state) => state.user.user);

  const initialValues = {
    fullName: '',
    email: '',
    clientReview: '',
  };

  return (
    <div className='add-comment'>
      <div className='add-comment__label'>Add Comment</div>
      <div className='add-comment__rating'>
        <div>Rating:</div>
        <Rating
          ratingValue={rating}
          fillColor='#FF6D33'
          size={23}
          onClick={handleRating}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .trim()
            .max(50, 'Too Long!')
            .required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          clientReview: Yup.string().max(500, 'Too Long!').required('Required'),
        })}
        onSubmit={async (values, { resetForm }) => {
          console.log("submit",!!user);
          
          const URL = API_ROOT + '/comments';
          if (!user) 
          alert("You must be logged in to comment…");
          const res = await axios.post(URL, {
            id: uniqueId('comment'),
            idProduct: productId,
            author: values.fullName,
            avatar: '',
            rating,
            createdAt: new Date(),
            content: values.clientReview,
          });
          setNewComment(values.clientReview);
          resetForm();
          console.log(res);
        }}
      >
        <Form>
          <div className='add-comment__group'>
            <div className='add-comment__group--item'>
              <label htmlFor='fullName'>Full Name</label>
              <Field id='fullName' name='fullName' />
            </div>

            <div className='add-comment__group--item'>
              <label htmlFor='email'>Email Address</label>
              <Field id='email' name='email' type='email' />
            </div>
          </div>
          <div className='add-comment__group--item'>
            <label htmlFor='clientReview'>Client review</label>
            <Field
              as='textarea'
              id='clientReview'
              name='clientReview'
              className='large-input'
            />
          </div>

          <button type='submit' className='add-comment__btn'>
            Add review
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddComment;
