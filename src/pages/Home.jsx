import React from 'react'
import ProductCard from '../Components/ProductCard'
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const Home = () => {

  const bannerUrl = "https://media.istockphoto.com/id/2155449784/photo/vesak-lanterns-at-night-with-light-bokeh-in-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=D4LuhWzh-KMTegWRQcwRgrZfnI7nf4Ek4IL4gkk_hcg=";

  return (

    <>

      {/* New Product Heading and grid  */}
      <div className="mt-20 px-4">
        <h1 className="text-2xl font-semibold">New Products</h1>
      </div>
      <div className='grid px-10 mt-5 grid-cols-5 gap-4'>
        
          <ProductCard imgSrc={"https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M="}
          isSale={true}
          productName={"Veg Dumplings"}
          price={29.99}
          salePrice={99.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo="}
          isSale={false}
          productName={"Medium Sized Pizza"}
          price={69.49}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y="}
          isSale={true}
          productName={"Delicious Kochuri"}
          price={49.99}
          salePrice={99.99}
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
        
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y="}
          isSale={true}
          productName={"Delicious Kochuri"}
          price={49.99}
          salePrice={99.99}
        />
          <ProductCard imgSrc={"https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4="}
          isSale={false}
          productName={"Burger large size"}
          price={19.99}
          salePrice={99.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro="}
          isSale={true}
          productName={"Delicious Coffee"}
          price={29.99}
          salePrice={49.99}
        />
        
      <ProductCard imgSrc={"https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M="}
          isSale={true}
          productName={"Veg Dumplings"}
          price={29.99}
          salePrice={99.99}
        />
        <ProductCard imgSrc={"https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo="}
          isSale={false}
          productName={"Medium Sized Pizza"}
          price={69.49}
        />
        
      

      </div>
      {/* End of New Product Heading and grid  */}

      {/* Sale Banner */}
      <Banner
        bannerUrl={bannerUrl}
        bannerTitle={"Sale! 50% Off on most of the Products"}
        bannerDescription={"Experience the best deals in your favorite e-commerce store"}
      />
      {/* End of Sale Banner */}

      <Footer/>
    </>
  )
}

export default Home
