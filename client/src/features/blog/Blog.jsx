import React from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '../../data.js';

const Blog = () => {
  const handleBlogClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div name="home" className=" p-10 md:p-20 mb-16">
      <div className="p-5 mr-auto">
        <img src="./images/logo-name-withoutbg.png" className="w-[200px] h-[45px]" alt="Logo" />
      </div>
      <div name="posts" className="mt-12 flex flex-col gap-20 md:gap-40">
        {Posts.map((post, index) => (
          <div
            name="post"
            key={post.id}
            className={`flex flex-col md:flex-row gap-5 md:gap-20 pb-5 mb-3 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div name="img" className="flex-2 relative">
              <img
                src={post.img}
                alt="Post"
                className="w-full max-h-[650px] object-cover rounded-xl"
              />
              <div className="absolute top-2 left-[-20px] w-full h-full bg-[#DCF2F1] rounded-xl z-[-1]"></div>
            </div>
            <div name="content" className="flex-3 line">
              <Link to={`/post/${post.id}`} onClick={handleBlogClick}>
                <h1 className="text-2xl md:text-4xl font-bold pb-5">{post.title}</h1>
              
              <p className="text-base md:text-lg pb-5">{post.desc.substring(0, 250)}....</p>
              <button className="mt-4 px-4 md:px-8 py-2 border border-teal-500 text-teal-500 hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out rounded-xl">
                Read More
              </button>
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
