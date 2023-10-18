import React from "react";

const ProductDetails = () => {
  return (
    <>
      <div className="flex w-[90%] justify-between text-center pl-6 mt-3 mb-8">
        <div>
          <h1 className="text-sm text-slate-400 font-bold ml-9 tracking-wider">
            Product name
          </h1>
        </div>
        <div className="flex justify-around -mr-2">
          <div>
            <h1 className="text-sm text-slate-400 font-bold ml-9 tracking-wider">
              Stock
            </h1>
          </div>
          <div className="ml-7">
            <h1 className="text-sm text-slate-400 font-bold ml-9 tracking-wider">
              Price
            </h1>
          </div>
          <div className="ml-5">
            <h1 className="text-sm text-slate-400 font-bold ml-9 tracking-wider">
              Total Sales
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
