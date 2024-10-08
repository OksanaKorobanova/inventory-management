import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className='bg-white shadow-md rounded-2xl pb-16 h-full'>
      {children}
    </div>
  );
};

export default Card;
