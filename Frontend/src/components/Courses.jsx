import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import Cards from "./partials/Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Courses() {
  const [paidbook, setpaidbook] = useState([]);
  useEffect(() => {
    try {
      const getBook = async () => {
        const { data } = await axios.get("http://localhost:880/book");
        console.log(data);
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
      <div className="min-h-screen mt-28 md:mt-40 flex flex-col items-center w-full    md:px-10">
        <div className="flex flex-col items-center gap-7 px-3">
          <h1 className=" text-2xl md:text-4xl font-extrabold leading-relaxed ">
            We're delightted to have{" "}
            <span className="text-pink-500 ">you Here! :)</span>
          </h1>
          <p className="text-center md:mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            nobis totam libero ea dolorum accusamus natus laboriosam. Odit
            facere labore facilis suscipit perspiciatis, deserunt, quidem nobis
            ad, atque voluptate tenetur libero at vel sint omnis expedita enim
            blanditiis quibusdam officiis. Sequi voluptatum dicta, nihil libero
            debitis delectus reiciendis tempora necessitatibus itaque.
            Asperiores aliquam iure,{" "}
          </p>
          <Link to="/" className="px-5 rounded-xl py-2 bg-pink-500">
            Back
          </Link>
        </div>
        <div className="flex w-full flex-wrap justify-evenly items-center gap-x-5 gap-y-10 mt-20">
          {paidbook ? (
            paidbook.map((item) => <Cards data={item} key={item.id} />)
          ) : (
            <h1>loading....</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;

// We're delightted to have you Here! :)
