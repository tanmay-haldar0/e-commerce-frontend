import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();  
  
  const products = [
    {
      id: 1,
      imgSrc: 'https://via.placeholder.com/500',
      productName: 'Nike Lebron 16 Low',
      price: 150.00,
      description: 'The Lebron 16 Low is built for the biggest and most stylish moments.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#000', '#FFF', '#C00'],
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedSize, setSelectedSize] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if (comment) {
      setComments([...comments, comment]);
      e.target.reset();
    }
  };

  return (
    <div className='max-w-5xl mx-auto p-6 mt-16 grid grid-cols-2 gap-8 items-center'>
      <div>
        <h1 className='text-4xl font-bold'>{product.productName}</h1>
        <p className='text-2xl font-semibold text-gray-800 mt-2'>${product.price.toFixed(2)}</p>
        <p className='text-gray-600 mt-4'>{product.description}</p>
        
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Select Size:</h2>
          <div className='flex gap-2 mt-2'>
            {product.sizes.map(size => (
              <button 
                key={size} 
                className={`border px-4 py-2 rounded-lg ${selectedSize === size ? 'bg-gray-200' : ''}`} 
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className='mt-6 w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700'>
          Add to Cart
        </button>
      </div>
      <img src={product.imgSrc} alt={product.productName} className='w-full h-auto rounded-lg' />
      <div className='flex gap-2 mt-4'>
        {product.colors.map((color, index) => (
          <div key={index} className='w-8 h-8 rounded-full' style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className='p-6 shadow-lg bg-white rounded-lg'>
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Reviews and Comments:</h2>
          <form className='mt-2' onSubmit={handleCommentSubmit}>
            <textarea name='comment' className='border w-full p-2 rounded-lg' placeholder='Leave a comment...' rows='3'></textarea>
            <button type='submit' className='mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Submit</button>
          </form>
          <div className='mt-4'>
            <h3 className='font-semibold'>User Comments:</h3>
            {comments.length > 0 ? comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            )) : <p>No comments yet.</p>}
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Image Gallery:</h2>
          <div className='grid grid-cols-3 gap-2 mt-2'>
            <img src={product.imgSrc} alt={product.productName} className='w-full h-auto rounded-lg' />
            <img src='https://via.placeholder.com/500' alt='Additional Image 1' className='w-full h-auto rounded-lg' />
            <img src='https://via.placeholder.com/500' alt='Additional Image 2' className='w-full h-auto rounded-lg' />
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Similar Products:</h2>
          <div className='flex gap-4 mt-2'>
            <div className='border p-4 rounded-lg'>
              <img src='https://via.placeholder.com/150' alt='Similar Product 1' className='w-full h-auto rounded-lg' />
              <h3 className='font-semibold'>Similar Product 1</h3>
              <p className='text-gray-600'>$120.00</p>
            </div>
            <div className='border p-4 rounded-lg'>
              <img src='https://via.placeholder.com/150' alt='Similar Product 2' className='w-full h-auto rounded-lg' />
              <h3 className='font-semibold'>Similar Product 2</h3>
              <p className='text-gray-600'>$130.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
