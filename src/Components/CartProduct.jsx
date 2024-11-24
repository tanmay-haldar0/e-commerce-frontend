import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const CartProduct = ({ imgSrc, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <div className='w-[90vw] sm:w-full h-36 p-1 sm:p-2 flex items-center mb-4 justify-between rounded-lg shadow-md border-2 border-slate-200'>
        <img
          src={imgSrc}
          alt='product-image'
          className='object-cover w-2/5 sm:w-1/5 h-full rounded-md'
        />
        <div className='sm:m-5 w-2/5 sm:w-3/5 h-full'>
          <h3 className='text-sm sm:text-lg font-semibold'>{name}</h3>
          <p className='text-sm sm:text-md text-primary font-semibold'>$ {price}</p>
          <div className='flex items-center text-yellow-500'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <div className='flex items-center mt-2'>
            <button onClick={decreaseQuantity} className='px-2 py-1 bg-primary text-white rounded-md'>-</button>
            <input 
              type='text' 
              value={quantity} 
              readOnly 
              className='mx-2 w-12 text-center border rounded-md' 
            />
            <button onClick={increaseQuantity} className='px-2 py-1 bg-primary text-white rounded-md'>+</button>
          </div>
        </div>
        <div className="sm:w-1/5 h-full flex sm:items-center justify-center text-primary text-2xl sm:text-3xl cursor-pointer">
          <IoCloseSharp />
        </div>
      </div>
    </>
  );
}

export default CartProduct;