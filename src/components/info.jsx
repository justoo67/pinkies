import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdMicrowave } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

const Info = () => {
  return (
    <>
      <div className="flex bg-white p-3 justify-center items-center space-x-3 my-20 ">
      <div className="flex justify-center items-center shadow-md p-4 space-x-4 rounded bg-white">

          <div className="flex ">
            <a className="flex text-pink-500 text-5xl">
              <FaTruck />
            </a>
          </div>

          <div>
            <h1 className="text-l font-bold ">Cake Delivered to Your Door</h1>
            <p>Order early for same day delivery</p>
          </div>
        </div>
        <div className="flex space-x-4 justify-center items-center shadow-md p-4 px-2 rounded bg-white">

          <div>
            <a className="flex text-pink-500 text-4xl">
              <MdMicrowave />
            </a>
          </div>
          <div >
            <h2 className="text-l font-bold">Cake Delivered to Your Door</h2>
            <p>Order early for same day delivery</p>
          </div>
        </div>

        <div className="flex space-x-4 justify-center items-center shadow-md p-4 rounded bg-white">
          <div>
            <a className="flex text-pink-500 text-5xl">
              <HiOutlineLightBulb />
            </a>
          </div>
          <div>
            <h1 className="text-l font-bold">Cake Delivered to Your Door</h1>
            <p>Order early for same day delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
