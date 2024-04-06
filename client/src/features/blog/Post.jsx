

// export default Postone
import React from 'react';
import { postone } from '../../data';
import { useParams } from 'react-router-dom';
const Post = () => {
    const { id } = useParams(); 
  const postId = parseInt(id); 
  const post = postone.find(post => post.id === postId); 

  // If post is not found, display a message
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="flex gap-50 p-9">
      <div className="flex-5 flex flex-col gap-30">
        <div className="w-full max-h-[400px]">
          <img src={post.img} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="md:text-4xl text-2xl text-gray-700 m-auto p-9 ">{post.title}</h1>
        <p className="md:text-lg text-base text-justify leading-9"  dangerouslySetInnerHTML={{ __html: post.desc }}>
       
        </p>
      </div>
    </div>
  );
}

export default Post;
