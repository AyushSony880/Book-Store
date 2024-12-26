import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
function FreeBook() {
  const [freebook, setfreebook] = useState([]);
  const { theme } = useAuthContext;

  useEffect(() => {
    try {
      const getBook = async () => {
        const { data } = await axios.get("http://localhost:880/book");
        console.log(data);
        const val = data.filter((item) => item.category === "free");
        setfreebook(val);
      };
      getBook();
      
    } catch (error) {
      console.log(error);
    }
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 635,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Free Offered Courses</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>
      <div className="mt-10">
        <Slider {...settings} >
          {freebook.map((data) => (
            <Cards data={data} key={data.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
