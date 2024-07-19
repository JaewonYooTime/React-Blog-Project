import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen pt-20"> {/* 패딩을 추가하여 네비게이션 바와 겹치지 않도록 함 */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Welcome to Simple Blog</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">
            A passionate developer who loves to create amazing web applications and share knowledge with the world.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-150">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            <ul className="space-y-6">
              {posts.map(post => (
                <li key={post.id} className="bg-white p-6 border-b">
                  <Link to={`/post/${post.id}`}>
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">{post.title}</h4>
                        <p className="mt-2 text-gray-600">
                          {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                        </p>
                        <p className="mt-2 text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()} · {post.author}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
