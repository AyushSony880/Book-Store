import React from "react";

function NewCard() {
  return (
    <>
      <div className="sm:h-[350px] mx-1 w-36 sm:max-w-[300px] border  rounded-xl overflow-hidden shadow-lg">
        <div className="h-3/5 relative bg-red-300 overflow-hidden">
          {/* card image */}
          <img
            src={data.image}
            className={`w-full ${
              cardHover ? "scale-110" : ""
            } duration-300 ease-in-out`}
          />
        </div>
        {/* card details */}
        <div className=" sm:py-3 px-2 sm:px-5  h-2/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <h3 className="whitespace-nowrap text-lg font-semibold sm:font-bold">
              {data.name}
            </h3>
            <span className="inline-block text-yellow-500 ">★★★★☆</span>
          </div>
          <p className="text-xs sm:text-sm">{data.description}</p>
          <h3 className="font-bold text-base sm:text-lg text-[#ff5200] p-2">
            ${data.price}
          </h3>
        </div>
      </div>
    </>
  );
}

export default NewCard;
