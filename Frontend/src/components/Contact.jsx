import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

function Contact() {
  document.title = "Contact";
  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="m-3 p-5 rounded-md w-[550px] border shadow-md ">
          <h2 className="text-2xl font-bold mb-5 ">Contact Us</h2>
          <form className="md:px-5" action="">
            <div className="mb-5 ">
              <h3 className="mb-1  ">Name</h3>
              <input
                className="w-full bg-white border outline-none rounded-md px-2 md:px-5 py-2"
                type="text"
                placeholder="Enter fullname"
              />
            </div>
            <div className="mb-5 ">
              <h3 className="mb-1  ">Email</h3>
              <input
                className="w-full bg-white border outline-none rounded-md px-2 md:px-5 py-2"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-5 ">
              <h3 className="mb-1  ">Message</h3>
              <textarea
                name="message"
                className="bg-white outline-none border rounded-md w-full h-40 p-3"
                id=""
                placeholder="Type your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 rounded-md  px-5 py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
