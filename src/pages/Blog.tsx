import React from 'react'
import './css/Blog.css'
import { BlogsItem, PostsList } from '../components'


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
      <div className="blog-top">
        <div className="blog-top-info d-f">
          <div className="blog-top-date title">25.12.2020</div>
          <div className="blog-top-time title">6 minutes</div>
        </div>
        <h2 className="blog-top-title">IT industry trends</h2>
        <p className="blog-top-desc">
          IT trends on examples of WordPress and Laravel and so on … WordPress
          The IT industry is one of the most fast-growing ones. Developers release …
        </p>
        <div className="blog-top-tags d-f">
          <div className="top-tags-item">Laravel</div>
          <div className="top-tags-item">Back-end</div>
          <div className="top-tags-item">Landing Page</div>
        </div>
        <div className="blog-top-action d-f">
          <div className="action-name title">Read more</div>
          <a href="" className="action-link"><img src="/images/arrow_icon_white.png" alt="arrow_icon_white" /></a>
        </div>
      </div>
      <div className="blog-trends d-f align-center">
        <div><img src="/images/blog-trends.png" alt="blog-trends" /></div>
        <div className='blog-trends-content'>
          <div className="blog-top-info d-f">
            <div className="blog-top-date title">25.12.2020</div>
            <div className="blog-top-time title">6 minutes</div>
          </div>
          <h2 className="blog-top-title">IT industry trends</h2>
          <p className="blog-top-desc">
            IT trends on examples of WordPress and Laravel and so on … WordPress
            The IT industry is one of the most fast-growing ones. Developers release …
          </p>
          <div className="blog-top-tags d-f">
            <div className="top-tags-item">Laravel</div>
            <div className="top-tags-item">Back-end</div>
            <div className="top-tags-item">Landing Page</div>
          </div>
          <div className="blog-top-action d-f">
            <div className="action-name title">Read more</div>
            <a href="" className="action-link"><img src="/images/arrow_icon.png" alt="arrow_icon" /></a>
          </div>
        </div>
      </div>
      <div className="blog-box d-f">
        {
          PostsList.map((post) => {
            return (
              <BlogsItem
                {...post}
              />
            )
          })
        }
      </div>
      <div className="blog-pagination d-f">
        <button className='blog-pagination-btn blog-pagination-action'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 15L2 8M2 8L9 1M2 8L15.5997 8" stroke="#5B5B5C" stroke-width="1.5" />
          </svg>
        </button>
        <button className='blog-pagination-btn pagination-btn__active'>2</button>
        <button className='blog-pagination-btn'>3</button>
        <button className='blog-pagination-btn'>4</button>
        <button className='blog-pagination-btn'>5</button>
        <button className='blog-pagination-btn blog-pagination-action'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L14 8M14 8L7 15M14 8L0.400337 8" stroke="#5B5B5C" stroke-width="1.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Blog