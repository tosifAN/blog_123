// Blog.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Style/Blog.css'; // Import your CSS file for styling

const Blog = ({ match }) => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    userId: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bloger?blogId=${match.params.id}`);
        const blogData = Array.isArray(response.data) ? response.data[0] : response.data;
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [match.params.id]);

  return (
    <>
      <Header />
      <div className="blog-container">
        <h1 className="blog-title">{blog.title}</h1>
         {/* Use dangerouslySetInnerHTML to render HTML tags */}
              <p className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }} />
        <div className="blog-info">
          <p>Created At: {blog.createdAt}</p>
          <p>Updated At: {blog.updatedAt}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
































/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Blog = ({ match }) => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bloger?blogId=${match.params.id}`);
        // Assuming the response is an array, get the first item
        const blogData = Array.isArray(response.data) ? response.data[0] : response.data;
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [match.params.id]);

  return (
    <>
      <Header />
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p>Created At: {blog.createdAt}</p>
        <p>Updated At: {blog.updatedAt}</p>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
*/