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
  const [quantity, setQuantity] = useState(1); // State for quantity, initialized to 1

  const products = [
    {
      id: 1,
      imgSrc: 'https://th.bing.com/th/id/OIP.ciuVLqG4L1s0An4zq27nuwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7',
      productName: 'Nike Lebron 16 Low',
      price: 150.0,
      prevPrice:199.55,
      description:
        'The Lebron 16 Low is built for the biggest and most stylish moments. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro a doloremque voluptatem asperiores velit earum,  esse ea aliquam temporibus quia. Numquam quaerat, modi quia in nemo, blanditiis,',
      rating: 4.5, // Example rating
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

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />)
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key='half' />)
    }

    // Add empty stars to make a total of 5 stars
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />)
    }

    return stars
  };

  return (
    <div className='max-w-7xl mx-auto p-6 mt-14 items-center'>
      <div className='flex  h-[500px] p-3'>
        <div className='flex flex-col space-y-2 w-[90px] mr-5'>
          {imageGallery.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Thumbnail ${index}`}
              className='w-full cursor-pointer'
              onClick={() => setFullWidthImage(imgSrc)}
            />
          ))}
        </div>
        <div className='w-1/2 h-full'>
          <img
            src={fullWidthImage}
            alt={product.productName}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-around pl-5'>
          <h1 className='text-4xl font-bold text-gray-800'>
            {product.productName}
          </h1>
          <p className='text-md text-gray-400'>{product.description}</p>
          <div className="w-full space-x-2">
          <span className='text-2xl font-semibold text-blue-600'>
            ${product.price.toFixed(2)}
          </span>
          <span className='text-xl font-semibold text-slate-400 line-through'>
            ${product.prevPrice.toFixed(2)}
          </span>
          </div>
          <div className='flex items-center text-lg my-2'>
            <div className='flex items-center text-yellow-500'>
              {renderStars(product.rating)}
            </div>
          </div>
          
          <div className='my-4'>
            <label className='text-lg font-light text-slate-500'>Quantity:</label>
            <button 
              onClick={() => {
                setQuantity(Math.max(1, quantity - 1)); // Decrease quantity
              }}
              className='border bg-primary rounded p-2 ml-2'
            >
              -
            </button>
            <span className='border rounded p-2 ml-2'>{quantity}</span>
            <button 
              onClick={() => {
                setQuantity(quantity + 1); // Increase quantity
              }}
              className='border bg-primary rounded p-2 ml-2'
            >
              +
            </button>
          </div>
          <div className="w-full flex justify-between">
          
          <button className=' w-[49%] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition duration-200'>
            Customize
          </button>
          <button className=' w-[49%] bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition duration-200'>
            Add to Cart
          </button>
          </div>
          <button className=' bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition duration-200'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;

