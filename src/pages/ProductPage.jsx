import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const ProductPage = () => {
  const { id } = useParams()
  const imageGallery = [
    'https://th.bing.com/th/id/OIP.Eep5dR0_b8W6Sr42-afJIAHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th?id=OIP.J_jSjQfqmzyaRlUZcQ1RlAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://th.bing.com/th/id/OIP.m_z7TZU1F3OLW5vcYT8DCgAAAA?w=222&h=180&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.1m5FWEr7F8NuSAE6L4ASfAHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7',
  ];
  
  const [fullWidthImage, setFullWidthImage] = useState(imageGallery[0]);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      imgSrc: 'https://th.bing.com/th/id/OIP.ciuVLqG4L1s0An4zq27nuwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7',
      productName: 'Nike Lebron 16 Low',
      price: 150.0,
      prevPrice: 199.55,
      description: 'The Lebron 16 Low is built for the biggest and most stylish moments. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      rating: 4.5,
    }
  ]

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  const renderStars = rating => {
    if (!rating) {
      rating = 4.5
    }
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key='half' />)
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />)
    }

    return stars
  };

  return (
    <div className='max-w-7xl mx-auto p-6 mt-14'>
      <div className='flex h-[500px] p-3 space-x-8'>
        {/* Thumbnail Images */}
        <div className='flex flex-col space-y-2 w-[90px]'>
          {imageGallery.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Thumbnail ${index}`}
              className='w-full cursor-pointer rounded-md transform hover:scale-105 transition duration-300'
              onClick={() => setFullWidthImage(imgSrc)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className='w-1/2 h-full'>
          <img
            src={fullWidthImage}
            alt={product.productName}
            className='w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300'
          />
        </div>

        {/* Product Info */}
        <div className='w-1/2 h-full flex flex-col justify-between pl-5'>
          <h1 className='text-4xl font-bold text-gray-800'>
            {product.productName}
          </h1>
          <p className='text-md text-gray-500'>{product.description}</p>
          <div className="flex items-center space-x-4">
            <span className='text-2xl font-semibold text-blue-600'>
              ${product.price.toFixed(2)}
            </span>
            <span className='text-xl font-semibold text-slate-400 line-through'>
              ${product.prevPrice.toFixed(2)}
            </span>
          </div>
          
          {/* Rating */}
          <div className='flex items-center my-2'>
            <div className='flex items-center text-yellow-500'>
              {renderStars(product.rating)}
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className='my-4 flex items-center space-x-2'>
            <label className='text-lg font-light text-slate-500'>Quantity:</label>
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className='border rounded p-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-200'
            >
              -
            </button>
            <span className='border rounded p-2 bg-gray-100'>{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className='border rounded p-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-200'
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-between">
            <button className='w-[49%] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 transform hover:scale-105'>
              Customize
            </button>
            <button className='w-[49%] bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-200 transform hover:scale-105'>
              Add to Cart
            </button>
          </div>

          <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 w-full mt-4 transform hover:scale-105'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;
