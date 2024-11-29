import React from 'react'
import './css/Blog.css'

const Blog = () => {
  return (
    <div className='container'>
        <h1 className="title page-title">Blog</h1>
        <div className="blog-tags d-f">
            <button className='blog-tags-btn'>All posts</button>
            <button className='blog-tags-btn'>Laravel</button>
            <button className="blog-tags-btn">Back-end</button>
            <button className="blog-tags-btn tags-btn__active">Landing Page</button>
            <button className="blog-tags-btn">Design</button>
            <button className="blog-tags-btn">React</button>
            <button className="blog-tags-btn">Angular</button>
            <button className="blog-tags-btn">Node</button>
            <button className="blog-tags-btn">Java Script</button>
            <button className="blog-tags-btn">jQuery</button>
            <button className="blog-tags-btn">Bootstrap</button>
            <button className="blog-tags-btn">PHP</button>
            <button className="blog-tags-btn">Swift</button>
            <button className="blog-tags-btn">Vue</button>
            <button className="blog-tags-btn">WordPress</button>
            <button className="blog-tags-btn">React Native</button>
        </div>
    </div>
  )
}

export default Blog