import React from 'react';

const Checkout = () => {
  // Sample cart items with quantities
  const cartItems = [
    { name: 'Medium Sized Pizza', price: 69.49, quantity: 2 },
    { name: 'Large Burger', price: 29.49, quantity: 1 },
    { name: 'Veg Dumplings', price: 49.99, quantity: 3 },
  ];

  // Define delivery charge
  const deliveryCharge = 5.00;

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalTotalPrice = (totalPrice + deliveryCharge).toFixed(2);

  return (
    <div className='max-w-[800px] mx-auto p-5 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl sm:text-3xl font-semibold text-slate-800 mb-5'>
        Checkout
      </h1>

      {/* Cart Items Table */}
      <div className="overflow-x-auto">
        <table className='min-w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-blue-200'>
              <th className='border border-blue-400 p-2 sm:p-4 text-left text-gray-700'>Item</th>
              <th className='border border-blue-400 p-2 sm:p-4 text-left text-gray-700'>Price</th>
              <th className='border border-blue-400 p-2 sm:p-4 text-left text-gray-700'>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className='hover:bg-blue-100 transition duration-200'>
                <td className='border border-gray-300 p-2 sm:p-4 text-gray-800'>{item.name}</td>
                <td className='border border-gray-300 p-2 sm:p-4 text-gray-800'>${item.price.toFixed(2)}</td>
                <td className='border border-gray-300 p-2 sm:p-4 text-gray-800'>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delivery Charge */}
      <div className='flex justify-between p-4 mt-5 bg-blue-100 rounded-lg'>
        <h2 className='text-lg sm:text-xl font-semibold text-slate-800'>Delivery Charge:</h2>
        <h2 className='text-lg sm:text-xl font-semibold text-slate-800'>${deliveryCharge.toFixed(2)}</h2>
      </div>

      {/* Total Price */}
      <div className='flex justify-between p-4 mt-5 bg-blue-100 rounded-lg'>
        <h2 className='text-lg sm:text-xl font-semibold text-slate-800'>Total Price:</h2>
        <h2 className='text-lg sm:text-xl font-semibold text-slate-800'>${finalTotalPrice}</h2>
      </div>

      {/* Checkout Button */}
      <div className='flex justify-center mt-5'>
        <button className='bg-primary text-white px-4 sm:px-6 py-2 rounded-md shadow hover:bg-primary-dark transition duration-200'>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;