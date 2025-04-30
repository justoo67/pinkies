import React from 'react'

const Home = () => {
  return (
    <>
      <div className='bg-3-color-gradient flex justfy-between'>
        <div className='flex flex-col items-around bg-yellow-500 h-100 p-10'>
          <div className=''>
            <h1 className='font-bold'>Fresh and Yummy Cakes for You</h1>
            <p className=''>Your taste buds never had it so good.</p>
          </div>

          <button className='font-bold w-fit text-pink-500 rounded-xl text-xl py-3 px-5 bg-white'>Shop Now</button>
        </div>

        <div className="flex h-60 justify-end bg-white object-contain">
          <img src="/hp1.webp" alt='hp1' className='m-2 object-contain'/>
          <img src="/hp2.webp" alt='hp2'/>
          <img src="/hp3.webp" alt='hp3'/>
        </div>
      </div>
    </>
  )
}

export default Home 