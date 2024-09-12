import { Star } from 'lucide-react';
import React from 'react';

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= rating ? '#ffc107' : '#E4E5E9'}
      className='w-4 h4'
    />
  ));
};

export default Rating;