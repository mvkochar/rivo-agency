import React from 'react'
import './css/Footer.css'

const Footer = () => {
 
  return (
    <footer className="footer">
      <div className="footer-head">
        <div><img src="/images/logo.svg" alt="Logo" /></div>
      </div>
      <div className="footer-bar d-f jc-sb">
        <ul className='footer-list footer-list-main'>
          <li><a href="">Home</a></li>
          <li><a href="">Who We Are</a></li>
          <li><a href="">Reviews</a></li>
          <li><a href="">Contact</a></li>
          <li className='d-f'>
            <a href="" className='d-b'>Career</a>
            <sup className='careers-hot'>Hot</sup>
          </li>
          <li><a href="">Blog</a></li>
        </ul>
        <ul className="footer-list">
          <li className='d-f pos-r' style={{ height: "83px" }}>
            <a href="" className='d-b'>Projects</a><sup className='projects-count'>16</sup>
            <ul className="footer-sublist d-f" >
              <li><a href="">Meda</a></li>
              <li><a href="">Saltmine</a></li>
              <li><a href="">Odex</a></li>
              <li><a href="">Jotul</a></li>
              <li><a href="">Haulcars</a></li>
              <li><a href="">Skyline Enerrgy</a></li>
            </ul>
          </li>
          <li className='pos-r' style={{ height: "83px" }}>
            <a href="">Services</a>
            <ul className="footer-sublist d-f" >
              <li><a href="">Custom Software</a></li>
              <li><a href="">Mobile Development</a></li>
              <li><a href="">Web Development</a></li>
            </ul>
          </li>
          <li className='pos-r' style={{ height: "138px" }}>
            <a href="">Industry Expertise</a>
            <ul className="footer-sublist d-f" >
              <li><a href="">Healthcare & Fitness</a></li>
              <li><a href="">Real Estate</a></li>
              <li><a href="">Custom CRM</a></li>
              <li><a href="">Education & E-learning</a></li>
              <li><a href="">Food & Restaurant</a></li>
              <li><a href="">Retail & E-Commerce</a></li>
              <li><a href="">Logistic & Distribution</a></li>
            </ul>
          </li>
          <li className='pos-r' style={{ height: "124px" }}>
            <a href="">Our Stack</a>
            <ul className="footer-sublist d-f" >
              <li><a href="">MongoDB</a></li>
              <li><a href="">AWS Amplify</a></li>
              <li><a href="">Swift</a></li>
              <li><a href="">MySQL</a></li>
              <li><a href="">Redux</a></li>
              <li><a href="">Bootstrap</a></li>
              <li><a href="">GraphQL</a></li>
              <li><a href="">Javascript</a></li>
              <li><a href="">Node.js</a></li>
              <li><a href="">jQuery</a></li>
              <li><a href="">PHP</a></li>
              <li><a href="">Vue.js</a></li>
              <li><a href="">React.js</a></li>
              <li><a href="">React Native</a></li>
              <li><a href="">Google Cloud</a></li>
              <li><a href="">AWS</a></li>
              <li><a href="">Wordpress</a></li>
              <li><a href="">Laravel</a></li>
            </ul>

          </li>
        </ul>
      </div>
      <div className="footer-copyright d-f jc-sb align-center">
        <div className='d-f'>
          <div>2020 &copy; Rivo Agency</div>
          <div style={{marginLeft: "100px"}}><a href="">Privacy Policy & Term of Use</a></div>
        </div>
        <div className='d-f align-center'>
          <div className="footer-top-title">Back to Top</div>
          <button className='footer-top-btn' onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
            <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.27209 22.5L7.2721 1.5M7.2721 1.5L1.2721 7.5M7.2721 1.5L13.2721 7.5" stroke="#F3F3F5" />
            </svg>
          </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer