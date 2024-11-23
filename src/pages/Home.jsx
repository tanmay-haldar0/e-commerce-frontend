import React from 'react'
import ProductCard from '../Components/ProductCard'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import VBanner from '../Components/VBanner'
import CategoryCard from '../Components/CategoryCard'

const Home = () => {
  const bannerUrl =
    'https://media.istockphoto.com/id/2155449784/photo/vesak-lanterns-at-night-with-light-bokeh-in-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=D4LuhWzh-KMTegWRQcwRgrZfnI7nf4Ek4IL4gkk_hcg='
  const bannerUrl2 =
    'https://media.istockphoto.com/id/2055023629/photo/4k-beautiful-color-gradient-background-with-noise-abstract-pastel-holographic-blurred-grainy.jpg?s=612x612&w=0&k=20&c=l65_0xqN76oYzun9lKf_abnquQ7i8HF3pGkCnVbPKsE='

  return (
    <div className='max-w-[1740px] mx-auto'>
      {/* Category Heading */}
      <h1 className='mt-20  pl-10 text-2xl font-semibold'>Category</h1>
      <div className='mt-2 px-5 w-full h-28 flex items-center hide-scrollbar overflow-x-auto overflow-y-hidden'>
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/511484502/photo/double-cheese-and-bacon-cheeseburger.webp?a=1&b=1&s=612x612&w=0&k=20&c=Us0joN2d51ced9vo3zcDjJLID_p_INwtS2rTa-SLWZQ='
          }
          ctName={'Burger'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/622004942/photo/hot-pizza-slice.jpg?s=612x612&w=0&k=20&c=gMZDa3NcObXW5DDQUGmYzxiDuWYpWxJAIkhQm8_BgsI='
          }
          ctName={'Pizza'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1029369962/photo/dumplings-stuffed-noodles.jpg?s=612x612&w=0&k=20&c=500NQJjDtFXRfkGg_yHuFMQoKXjeb37yqPnBaZ9g2sQ='
          }
          ctName={'Dumplings'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/649708848/photo/coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=hg90c0_Ef-IJ3CQ61b_4SIG5vxKA689zGhtTH-A9iwM='
          }
          ctName={'Cofee'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/853020286/photo/motichoor-laddu.webp?a=1&b=1&s=612x612&w=0&k=20&c=q6ndetY_1397xqUKbAuJdcXTJchM8DbRe4NI1g360d4='
          }
          ctName={'Laddoo'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1313630445/photo/colourful-fruit-and-vegetable-salad.jpg?s=612x612&w=0&k=20&c=LGKYHqUiXjASPhJVj5YUuQo86eRfw_uSqbfp_vXC4gQ='
          }
          ctName={'Salad'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/853964590/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=5Td9IzgPaYJAKc95dCiysN8X2R5DlZA3opMKqMh5mzY='
          }
          ctName={'KPanner'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1133687689/photo/perfect-fried-chicken-pieces-flying-around-in-red-white-striped-box.jpg?s=612x612&w=0&k=20&c=xll2Onu2PQF4K7F1Tea7trdB9A9_zMDSxx-Cw1BIA6M='
          }
          ctName={'FChicken'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1128295890/photo/mix-berries-with-leaf-various-fresh-berries-isolated-on-white-background-raspberry-blueberry.jpg?s=612x612&w=0&k=20&c=47bMwJ9FRQzMBmEK0tPVmX5sg4CkOI4rgi_xH7X16cA='
          }
          ctName={'Fruits'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1313630445/photo/colourful-fruit-and-vegetable-salad.jpg?s=612x612&w=0&k=20&c=LGKYHqUiXjASPhJVj5YUuQo86eRfw_uSqbfp_vXC4gQ='
          }
          ctName={'Salad'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/853964590/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=5Td9IzgPaYJAKc95dCiysN8X2R5DlZA3opMKqMh5mzY='
          }
          ctName={'KPanner'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1133687689/photo/perfect-fried-chicken-pieces-flying-around-in-red-white-striped-box.jpg?s=612x612&w=0&k=20&c=xll2Onu2PQF4K7F1Tea7trdB9A9_zMDSxx-Cw1BIA6M='
          }
          ctName={'FChicken'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1128295890/photo/mix-berries-with-leaf-various-fresh-berries-isolated-on-white-background-raspberry-blueberry.jpg?s=612x612&w=0&k=20&c=47bMwJ9FRQzMBmEK0tPVmX5sg4CkOI4rgi_xH7X16cA='
          }
          ctName={'Fruits'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1313630445/photo/colourful-fruit-and-vegetable-salad.jpg?s=612x612&w=0&k=20&c=LGKYHqUiXjASPhJVj5YUuQo86eRfw_uSqbfp_vXC4gQ='
          }
          ctName={'Salad'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/853964590/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=5Td9IzgPaYJAKc95dCiysN8X2R5DlZA3opMKqMh5mzY='
          }
          ctName={'KPanner'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1133687689/photo/perfect-fried-chicken-pieces-flying-around-in-red-white-striped-box.jpg?s=612x612&w=0&k=20&c=xll2Onu2PQF4K7F1Tea7trdB9A9_zMDSxx-Cw1BIA6M='
          }
          ctName={'FChicken'}
        />
        <CategoryCard
          ctImg={
            'https://media.istockphoto.com/id/1128295890/photo/mix-berries-with-leaf-various-fresh-berries-isolated-on-white-background-raspberry-blueberry.jpg?s=612x612&w=0&k=20&c=47bMwJ9FRQzMBmEK0tPVmX5sg4CkOI4rgi_xH7X16cA='
          }
          ctName={'Fruits'}
        />
      </div>

      {/* New Product Heading and grid  */}
      <div className='mt-10 px-4 pl-10'>
        <h1 className='text-2xl font-semibold'>Popular Products</h1>
      </div>
      <div className='flex items-center h-full'>
        <div className='grid px-10 mt-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M='
            }
            isSale={true}
            productName={'Veg Dumplings'}
            price={29.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo='
            }
            isSale={false}
            productName={'Medium Sized Pizza'}
            price={69.49}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
            }
            isSale={true}
            productName={'Delicious Kochuri'}
            price={49.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro='
            }
            isSale={true}
            productName={'Delicious Coffee'}
            price={29.99}
            salePrice={49.99}
          />

          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
            }
            isSale={false}
            productName={'Burger large size'}
            price={19.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
            }
            isSale={true}
            productName={'Delicious Kochuri'}
            price={49.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
            }
            isSale={true}
            productName={'Delicious Kochuri'}
            price={49.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
            }
            isSale={false}
            productName={'Burger large size'}
            price={19.99}
            salePrice={99.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro='
            }
            isSale={true}
            productName={'Delicious Coffee'}
            price={29.99}
            salePrice={49.99}
          />
          <ProductCard
            imgSrc={
              'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
            }
            isSale={false}
            productName={'Burger large size'}
            price={19.99}
            salePrice={99.99}
          />
        </div>
        <VBanner
          mClass={'mr-8'}
          tColor={'text-white'}
          bgImgUrl={
            'https://media.istockphoto.com/id/1255850905/photo/happy-diwali-diya-oil-lamps-on-colorful-rangoli-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=tkN__TcfJrMQSlHPblQ9Fwi8efN9jnMvP1uoZNPpzmM='
          }
        />
      </div>
      {/* End of New Product Heading and grid  */}

      {/* Sale Banner */}
      <Banner
        bannerUrl={bannerUrl}
        bannerTitle={'Sale! 50% Off on most of the Products'}
        bannerDescription={
          'Experience the best deals in your favorite e-commerce store'
        }
      />
      {/* End of Sale Banner */}

      {/* Populer Product Heading and grid  */}
      <div className='flex items-center justify-center h-full'>
        <VBanner
          mClass={'ml-8'}
          tColor={'text-white'}
          bgImgUrl={
            'https://media.istockphoto.com/id/1735400533/photo/decorated-christmas-tree-with-balls.jpg?s=612x612&w=0&k=20&c=gfDJGJXD1Xeb_W3Tdvt1i3whCdEChta1SMm4Fj5IQQs='
          }
        />

        <div className=''>
          <div className='mt-20 pl-10 px-2'>
            <h1 className='text-2xl font-semibold'>Popular Products</h1>
          </div>
          <div className='grid px-10 mt-5 grid-cols-1 md:grid-cols-4 ml lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.webp?a=1&b=1&s=612x612&w=0&k=20&c=qil7GGAkjXOSIu6NB19XIlqAy2CYf4U0arY0c5uy05M='
              }
              isSale={true}
              productName={'Veg Dumplings'}
              price={29.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
              }
              isSale={false}
              productName={'Burger large size'}
              price={19.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/153444470/photo/pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmp-5NGZUXWag2EGOiwfXQN3Q4TvBYcYJBb8AXFaybo='
              }
              isSale={false}
              productName={'Medium Sized Pizza'}
              price={69.49}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
              }
              isSale={true}
              productName={'Delicious Kochuri'}
              price={49.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro='
              }
              isSale={true}
              productName={'Delicious Coffee'}
              price={29.99}
              salePrice={49.99}
            />

            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
              }
              isSale={false}
              productName={'Burger large size'}
              price={19.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
              }
              isSale={true}
              productName={'Delicious Kochuri'}
              price={49.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=612x612&w=0&k=20&c=8zpScH9IANsomHG4VsPDNq1aJmVXJWKzSrF8Mttwf_Y='
              }
              isSale={true}
              productName={'Delicious Kochuri'}
              price={49.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1399371766/photo/bacon-cheeseburger-on-a-toasted-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=958m1hYPSZn6eNLh00huIwEC85FhGz0pCtIbtaEq5f4='
              }
              isSale={false}
              productName={'Burger large size'}
              price={19.99}
              salePrice={99.99}
            />
            <ProductCard
              imgSrc={
                'https://media.istockphoto.com/id/1208794199/photo/the-original-stabucks-coffee-for-their-customer-at-the-starbucks-reserve-roastery-in-shanghai.webp?a=1&b=1&s=612x612&w=0&k=20&c=-l3KzfjcZlWR_TkXW_9U-kLxKTYpBKidsecbvQ55mro='
              }
              isSale={true}
              productName={'Delicious Coffee'}
              price={29.99}
              salePrice={49.99}
            />
          </div>
        </div>
      </div>
      {/* End of Populer Product Heading and grid  */}

      {/* Sale Banner */}
      <Banner
        bannerUrl={bannerUrl2}
        bannerTitle={'Sale! 50% Off on most of the Products'}
        bannerDescription={
          'Experience the best deals in your favorite e-commerce store'
        }
      />
      {/* End of Sale Banner */}
    </div>
  )
}

export default Home
