import React, { useState, useEffect } from "react";
// import { a } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className={`bg-white w-full min-w-full h-[100px] md:h-[100px] shadow-xl flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20`}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img src="/logo.png" alt="logo" className="w-[15rem]" />
          {isMobile && (
            <button
              className="lg:hidden cursor-pointer focus:outline-none"
              onClick={() => setIsMobile(!isMobile)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

        {(isMobile ? isMobile : true) && (
          <div
            className={`lg:flex items-center flex-col lg:flex-row gap-4 ${
              isMobile ? "hidden" : ""
            }`}
          >
            <a
              href="/"
              className="text-lg cursor-pointer font-semibold hover:scale-105 hover:bg-red-700 rounded-md transition-all duration-200 hover:text-white hover:p-2"
            >
              Home
            </a>

            <a
              href="/blogs.html"
              className="text-lg cursor-pointer font-semibold hover:scale-105 hover:bg-red-700 rounded-md transition-all duration-200 hover:text-white hover:p-2"
            >
              Blogs
            </a>

            <a
              href="/contact.html"
              className="text-lg cursor-pointer font-semibold hover:scale-105 hover:bg-red-700 rounded-md transition-all duration-200 hover:text-white hover:p-2"
            >
              Contact
            </a>
            <a
              href="/about.html"
              className="text-lg cursor-pointer font-semibold hover:scale-105 hover:bg-red-700 rounded-md transition-all duration-200 hover:text-white hover:p-2"
            >
              About
            </a>
            <a
              href="/privacy-policy.html"
              className="text-lg cursor-pointer font-semibold hover:scale-105 hover:bg-red-700 rounded-md transition-all duration-200 hover:text-white hover:p-2"
            >
              Privacy Policy
            </a>
          </div>
        )}
      </div>

      <div className="bg-red-700 py-20 flex flex-col w-full text-center  justify-center items-center relative">
        <div className="text-white flex flex-col w-full items-center justify-center gap-4">
          <p className="text-[2rem] font-bold">Convert Youtube to MP3</p>
          <p className="text-[1rem] max-w-[50%]">
            Find IP Address of your website. Sign up for a Site24x7 Free Account
            to monitor up to 5 websites for free continuously and be alerted
            when it goes down!
          </p>
        </div>

        <div className="bg-white pt-6 pb-8 px-6 w-[50%] absolute -bottom-16 shadow-lg ">
          <p className="text-left font-semibold">Domain Name</p>
          <div className="min-w-full">
            <div class="pt-2 relative  max-w-full text-gray-600">
              <input
                class="border-2 border-gray-300 w-[100%] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
                <svg
                  class="text-gray-600 h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXa="http://www.w3.org/1999/xa"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
