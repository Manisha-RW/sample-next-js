import React from "react";

const BlogPost = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              className="w-full mb-3"
            />
            <div className="p-4 pt-2">
              <div className="mb-4">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
