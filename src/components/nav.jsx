import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../images/logo.png";

const Nav = () => {
  return (
    <>
      <div className="flex justify-around text-white bg-3-color-gradient h-108 py-5">
        <div>
          <img src={Logo} alt="Logo" className="h-20"></img>
        </div>

        <div>
            
            <div className="flex items-center justify-between px-10 text-xl">

              <div className="flex items-center bg-white px-3 space-x-2 text-black">
                <textarea className="h-10 border"> </textarea>
                <FaMagnifyingGlass />
              </div>

              <div className="flex space-x-5 text-xl">
                <a>+254112418037</a>
                <a>
                  <FaShoppingCart />
                </a>
              </div>

            </div>

          <div className="">
            <ol className="flex space-x-5">
              <li>
                <a>All Cakes</a>
              </li>
              <li>
                <a>Birthday Cakes</a>
              </li>
              <li>
                <a>Cupcakes</a>
              </li>
              <li>
                <a>Gift</a>
              </li>
              <li>
                <a>Metropolitan Cakes</a>
              </li>
              <li>
                <a>Themed Cakes</a>
              </li>
              <li>
                <a>Wedding Cakes</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
