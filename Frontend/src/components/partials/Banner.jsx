import image from "../../../public/book.png";

function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row px-5 md:px-20">
        <div className="md:w-1/2 space-y-5 md:space-y-10 mt-5 md:mt-24 p-2 order-2 md:order-1">
          <h1 className="text-2xl md:text-4xl font-extrabold  max-w-[550px] ">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500"> new everyday!!!</span>
          </h1>
          <p className="text-lg md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
            totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
            corporis at veniam est voluptas animi!
          </p>
          <label className="px-5 py-2 border rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent"
              placeholder="Email"
            />
          </label>
          <button className="btn btn-secondary">Get Started</button>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img className="w-full h-full" src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
