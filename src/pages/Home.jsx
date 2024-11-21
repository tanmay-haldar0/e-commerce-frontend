import React from 'react'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (

    <>
    <div className="mt-20 px-4">
      <h1 className="text-2xl font-semibold">New Products</h1>
    </div>
      <div className='grid px-10 mt-5 grid-cols-5 gap-4'>
        <ProductCard imgSrc={"https://plus.unsplash.com/premium_photo-1719017276454-99ae8306c200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG11Z3xlbnwwfHwwfHx8MA%3D%3D"}
          isSale={true}
          productName={"White Coffee Mug"}
          price={49.99}
          salePrice={99.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo="}
          isSale={false}
          productName={"Medium Sized Pizza"}
          price={69.49}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro="}
          isSale={true}
          productName={"Delicious Coffee"}
          price={29.99}
          salePrice={49.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4="}
          isSale={false}
          productName={"Burger large size"}
          price={19.99}
          salePrice={99.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M="}
          isSale={true}
          productName={"Veg Dumplings"}
          price={29.99}
          salePrice={99.99}
        />

      </div>
    </>
  )
}

export default Home
