import React from 'react'

const CategoryCard = ({ctImg, ctName}) => {
  return (
    <div>
      <div className="rounded-md flex items-center justify-center text-center flex-col p-5">
        <img src={ctImg} alt="category image" className='object-cover rounded-full w-[85px] h-[85px]'/>
        <p className="text-sm font-medium">{ctName}</p>
      </div>
    </div>
  )
}

export default CategoryCard
