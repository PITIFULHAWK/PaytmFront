import React from 'react';
import { Link } from 'react-router-dom';

export const BottomWarning = ({lable, buttonText, to}) => {
  return (
    <div className='flex justify-center text-sm py-2'>
        <div>
            {lable}
        </div>
        <Link className='pointer pl-1 cursor-pointer underline' to={to}>
            {buttonText}
        </Link>
    </div>
  )
}
