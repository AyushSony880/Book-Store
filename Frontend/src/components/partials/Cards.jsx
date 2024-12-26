import React from "react";

function Cards({ data }) {
  console.log("data :", data);

  return (
    <div className="sm:h-[350px] bg-gray-500 mx-1 w-36 sm:w-60 lg:w-[280px] border-2 border-pink-300 rounded-xl overflow-hidden  shadow-xl hover:scale-105 duration-300 ease-in-out  du500">
      <div className="h-36 sm:h-[60%] md:h-[50%] relative overflow-hidden ">
        <img
          src={data.image}
          className="h-full w-full object-top object-cover "
          alt="Book"
        />
      </div>
      <div className="sm:py-3 relative p-2 h-40 sm:h-[40%] md:h-[50%]">
        <h2 className=" w-full  text-xs  sm:text-sm md:text-base font-semibold lg:font-bold">
          {data.name}{" "}
        </h2>
        <p className="text-xs text-center absolute right-0 -top-6 px-2  py-1 text-white font-normal bg-pink-500 rounded-full">
          {data.category}
        </p>{" "}
        <p className="text-xs md:text-sm ">{data.description}</p>
        <div className="flex absolute left-0 bottom-4 w-full px-2 items-center justify-between  ">
          <p className="px-1 sm:px-4 border text-xs sm:text-base rounded-full sm:py-1">${data.price}</p>
          <p className="px-1 sm:px-4 border text-xs sm:text-base rounded-full sm:py-1 hover:bg-pink-500 hover:text-white duration-500 cursor-pointer ease-in-out">
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
