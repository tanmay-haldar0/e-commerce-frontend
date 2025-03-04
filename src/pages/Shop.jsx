import React, { useState } from 'react';

const Shop = () => {
  const products = [
    {
      imgSrc: 'https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M=',
      isSale: true,
      productName: 'Veg Dumplings',
      price: 29.99,
      salePrice: 99.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo=',
      isSale: false,
      productName: 'Medium Sized Pizza',
      price: 69.49,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y=',
      isSale: true,
      productName: 'Delicious Kochuri',
      price: 49.99,
      salePrice: 99.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro=',
      isSale: true,
      productName: 'Delicious Coffee',
      price: 29.99,
      salePrice: 49.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4=',
      isSale: false,
      productName: 'Burger large size',
      price: 19.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M=',
      isSale: true,
      productName: 'Veg Dumplings',
      price: 29.99,
      salePrice: 99.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo=',
      isSale: false,
      productName: 'Medium Sized Pizza',
      price: 69.49,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y=',
      isSale: true,
      productName: 'Delicious Kochuri',
      price: 49.99,
      salePrice: 99.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro=',
      isSale: true,
      productName: 'Delicious Coffee',
      price: 29.99,
      salePrice: 49.99,
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4=',
      isSale: false,
      productName: 'Burger large size',
      price: 19.99,
    },
    // Add more products as needed
  ];

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  // Filtering logic
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'All' || 
      (selectedPriceRange === 'Under 500' && product.price < 500) ||
      (selectedPriceRange === '500-1000' && product.price >= 500 && product.price <= 1000);
    return categoryMatch && priceMatch;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Categories and price ranges
  const categories = ['All', 'Pizza', 'Burger', 'Appetizer', 'Salad', 'Beverage'];
  const priceRanges = ['All', 'Under 500', '500-1000'];

  return (
    <div className='max-w-[1200px] mx-auto p-4 rounded-lg'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-8 text-center'>
        Our Menu
      </h1>

      <div className='flex flex-col md:flex-row gap-6'>
        {/* Filters Sidebar */}
        <div className='w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 h-fit'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Filters</h2>
          
          <div className='mb-6'>
            <h3 className='font-semibold text-gray-700 mb-2'>Category</h3>
            <select 
              className='w-full p-2 border rounded-md'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className='mb-6'>
            <h3 className='font-semibold text-gray-700 mb-2'>Price Range</h3>
            <select 
              className='w-full p-2 border rounded-md'
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className='w-full md:w-3/4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {currentItems.map((product) => (
              <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              isSale={product.isSale}
              productName={product.productName}
              price={product.price}
              salePrice={product.salePrice}
            />
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center mt-8 gap-2'>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400'
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className='flex items-center px-4'>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400'
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden mt-6'>
        {/* Mobile filters and products can be added here following similar patterns */}
      </div>
    </div>
  );
};

export default Shop;