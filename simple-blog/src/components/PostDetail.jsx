import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postResponse = await axios.get(`http://localhost:4000/posts/${id}`);
        setPost(postResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostData();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex flex-row justify-center min-h-screen bg-gray-100 p-10 pt-20">
      <div className="bg-white p-6 mb-10 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <div className="text-gray-500 mb-4">
          <span>Author: {post.author}</span> | <span>Date: {new Date(post.date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600 mb-4">{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
