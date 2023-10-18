import React from "react";
import ProductImg from "../../assets/wallpaperflare.com_wallpaper (3).jpg";

const ProductDetails = () => {
  return (
    <ul>
      <li className="flex justify-between w-[90%] pl-14 mb-5">
        <div className="flex justify-center">
          <img src={ProductImg} alt="" className="w-28 h-16 mr-7 rounded-lg" />
          <div>
            <h1 className="font-bold tracking-wider text-lg mt-1">
              Abstract 3D
            </h1>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nam!
            </p>
          </div>
        </div>
        <div className="flex mr-5">
          <div>
            <p className="text-sm  ml-9 tracking-wider">32 in stock</p>
          </div>
          <div className="ml-8">
            <p className="text-sm font-bold ml-9 tracking-wider">$ 45.99</p>
          </div>
          <div className="ml-8">
            <p className="text-sm ml-9 tracking-wider">20</p>
          </div>
        </div>
      </li>
      <li className="flex justify-between w-[90%] pl-14">
        <div className="flex justify-center">
          <img src={ProductImg} alt="" className="w-28 h-16 mr-7 rounded-lg" />
          <div>
            <h1 className="font-bold tracking-wider text-lg mt-1">
              Abstract 3D
            </h1>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nam!
            </p>
          </div>
        </div>
        <div className="flex mr-5">
          <div>
            <p className="text-sm  ml-9 tracking-wider">32 in stock</p>
          </div>
          <div className="ml-8">
            <p className="text-sm font-bold ml-9 tracking-wider">$ 45.99</p>
          </div>
          <div className="ml-8">
            <p className="text-sm ml-9 tracking-wider">20</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProductDetails;
