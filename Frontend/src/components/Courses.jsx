import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import Cards from "./partials/Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
function Courses() {
  const [paidbook, setpaidbook] = useState([]);
  useEffect(() => {
    try {
      const getBook = async () => {
        const { data } = await axios.get(
          "https://book-store-nftq.onrender.com/book"
        );
        const val = data.filter((item) => item.category === "paid");
        setpaidbook(val);
      };
      getBook();
    } catch (error) {
      console.log(error);
    }
  }, []);

  document.title = "Courses";
  return (
    <>
      <Navbar />
      {paidbook.length !== 0 ? (
        <div className="min-h-screen mt-28 md:mt-40 flex flex-col items-center w-full    md:px-10">
          <div className="flex flex-col items-center gap-7 px-3">
            <h1 className=" text-2xl md:text-4xl font-extrabold leading-relaxed ">
              We're delightted to have{" "}
              <span className="text-pink-500 ">you Here! :)</span>
            </h1>
            <p className="text-center md:mt-10">
              Reading books enriches the mind and soul, offering knowledge,
              inspiration, and escape. It sparks creativity, enhances focus, and
              builds empathy by exploring diverse perspectives. Books are
              timeless companions, fueling growth, imagination, and wisdom. At
              01BookStoreApp, we celebrate the joy of reading, connecting you
              with stories that transform and inspire.
            </p>
            <Link to="/" className="px-5 rounded-xl py-2 bg-pink-500">
              Back
            </Link>
          </div>
          <div className="flex w-full flex-wrap justify-evenly items-center py-10 gap-x-5 gap-y-10 mt-20">
            {paidbook.length !== 0 &&
              paidbook.map((item) => <Cards data={item} key={item.id} />)}
          </div>
        </div>
      ) : (
          <div className="w-full h-svh flex items-center justify-center">
            <PropagateLoader color="#e90ce8" />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Courses;

// We're delightted to have you Here! :)
