import React from 'react'

const ProductCard = ({ imgSrc, isSale, productName, price, salePrice }) => {
    return (
        <div className="relative border rounded-lg p-2 bg-white shadow-md hover:shadow-xl transition-all ease-out border-slate-300">
            <div className="flex flex-col  justify-between">
                <div className="">
                    <img src={imgSrc} alt="Product-Img" className='rounded-md w-full bg-slate-200 h-36 object-cover' />
                </div>
                <h3 className="text-md font-semibold mt-2 ">{productName}</h3>
                {isSale ? (<div className="flex items">
                    <p className="text-sm font-semibold text-primary">${price}</p>
                    <p className="text-sm font-semibold text-slate-500 pl-2 line-through">${salePrice}</p>
                </div>) : (
                    <p className="text-sm font-semibold text-primary">${price}</p>
                )}
                {isSale ? (<p className="text-sm mt-1 text-red-500 font-semibold">Flat 50% off</p>):(<p className="text-sm mt-1 text-slate-500 font-semibold">Value for Price</p>)}
                <div className="flex items-center mt-2">
                    <button className='btn w-full bg-primary p-2 rounded-md text-white font-medium text-sm'>Buy Now</button>
                </div>
                {isSale?(<div className="w-10 h-5 rounded-md bg-red-600 flex items-center justify-center absolute top-0 right-0">
                    <p className='text-white text-sm font-medium'>Sale</p>
                </div>):""}
                
            </div>
        </div>
    )
}

export default ProductCard
