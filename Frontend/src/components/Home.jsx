import React from "react";
import FreeBook from "./partials/FreeBook";
import Navbar from "./partials/Navbar";
import Banner from "./partials/Banner";
import Footer from "./partials/Footer";
import { useAuthContext } from "../context/AuthContext";

function Home() {
  document.title = "Home";
  const { theme } = useAuthContext();

  return (
    <div className={`w-full min-h-svh scroll-smooth overflow-hidden`}>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
}

export default Home;
