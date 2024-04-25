import React from "react";

const Blogs = () => {
  return (
    <div class="py-8 pt-44 mx-auto max-w-screen-xl text-center lg:px-6">
      <div class="mx-auto max-w-screen-sm">
        <h1 class="mb-4 text-4xl font-bold text-gray-900">Blogs</h1>
        <p class="mb-8 font-normal text-gray-600 lg:mb-16 sm:text-xl">
          Explore the whole collection of blogs from check my ip online
        </p>
      </div>
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-3 gap-8">
        <a
          href="/blogs/streamlining-success-the-benefits-of-digital-ordering-systems-for-restaurants.html"
          class="flex min-h-max flex-col justify-center items-start p-8 text-left border-b border-gray-200 md:p-12 lg:border-r hover:scale-105 duration-300 shadow-xl rounded-xl"
        >
          <figure>
            <blockquote class="mb-8">
              <h3 class="text-lg font-semibold mt-4">
                Streamlining Success The Benefits of Digital Ordering Systems
                for Restaurants
              </h3>
              <p class="mt-4">
                In this blog, we'll explore the numerous benefits of
                implementing a digital ordering system in restaurants.
              </p>
            </blockquote>
            <p className="font-kumbh">Date: 13-Mar-2024</p>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
