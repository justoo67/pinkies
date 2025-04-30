import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-customBlue p-10 text-white h-100">
        <div className="flex justify-around">
            <img src="/logo.png" alt="Logo" className="h-16"></img>
          <ol className="flex justify-between mx-10 col-white space-x-20">
            <li className="flex flex-col text-white">
              <h1 className="font-bold">Product</h1>
              <a>Price list</a>
              <a>Celebration insights</a>
              <a>flavours</a>
              <a>Cake size pricing</a>
              <a>Reviews</a>
            </li>

            <li className="flex flex-col justify-around text-white">
              <h1 className="font-bold">Social</h1>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Instagram</a>
            </li>

            <li className="flex flex-col justify-around text-white">
              <h1 className="font-bold">Support</h1>
              <a>FAQs</a>
              <a>Docs</a>
              <a>Help</a>
            </li>

            <li className="flex flex-col justify-around text-white">
              <h1 className="font-bold">Company</h1>
              <a>About</a>
              <a>Blog</a>
              <a>Inclusion</a>
              <a>Shop</a>
            </li>
          </ol>
        </div>
        <div>footer</div>
      </div>
    </>
  );
};

export default Footer; 