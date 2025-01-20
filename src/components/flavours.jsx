import React from 'react'
import ForestCake  from '../images/fl1.jpg';
import Fl2  from '../images/fl2.jpg';
import Fl3  from '../images/fl3.jpg';
import Fl4  from '../images/fl4.jpg';
import Fl5  from '../images/fl5.jpg';
import Fl6  from '../images/fl6.jpg';
// 
const Flavours = () => {
  return (
<>
<div className='flex flex-wrap space-x-5 bg-gray-400 space-y-5 p-10 '>



 

    <div className="relative w-64 h-64">
      {/* Image */}
      <img src={ForestCake} alt="Forest Cake" className="w-full h-full object-cover rounded-md" />

      {/* Gradient and Text */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full bg-gradient-to-t from-pink-400 to-transparent p-1 flex justify-center rounded-b-md">
          <a className="text-white text-lg font-semibold">Forest Cakes</a>
        </div>
      </div>
    </div>

    <div className="relative w-64 h-64">
      {/* Image */}
      <img src={Fl2} alt="Forest Cake" className="w-full h-full object-cover rounded-md" />

      {/* Gradient and Text */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full bg-gradient-to-t from-pink-400 to-transparent p-1 flex justify-center rounded-b-md">
          <a className="text-white text-lg font-semibold">Forest Cakes</a>
        </div>
      </div>
    </div>

    <div className="relative w-64 h-64">
      {/* Image */}
      <img src={Fl3} alt="Forest Cake" className="w-full h-full object-cover rounded-md" />

      {/* Gradient and Text */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full bg-gradient-to-t from-pink-400 to-transparent p-1 flex justify-center rounded-b-md">
          <a className="text-white text-lg font-semibold">Forest Cakes</a>
        </div>
      </div>
    </div>

    <div className="relative w-64 h-64">
      {/* Image */}
      <img src={Fl4} alt="Forest Cake" className="w-full h-full object-cover rounded-md" />

      {/* Gradient and Text */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full bg-gradient-to-t from-pink-400 to-transparent p-1 flex justify-center rounded-b-md">
          <a className="text-white text-lg font-semibold">Forest Cakes</a>
        </div>
      </div>
    </div>

    <div className="relative w-64 h-64">
      {/* Image */}
      <img src={Fl5} alt="Forest Cake" className="w-full h-full object-cover rounded-md" />

      {/* Gradient and Text */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full bg-gradient-to-t from-pink-300 to-transparent p-1 flex justify-center rounded-b-md">
          <a className="text-white text-lg font-semibold">Citrus Cake</a>
        </div>
      </div>
    </div>


    
</div>
</>
  )
}

export default Flavours