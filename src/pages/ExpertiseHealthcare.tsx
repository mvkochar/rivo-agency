import React from 'react'
import './css/ExpertiseHealthcare.css'
import { Link } from 'react-router-dom'

const ExpertiseHealthcare = () => {
    return (
        <>
            <main className='healthcare-main'>
                <div className="healthcare-main-back d-f">
                    <Link to='/' className="action-link">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6.5L1 6.5M1 6.5L6.5 12M1 6.5L6.5 1" stroke="white" />
                        </svg>
                    </Link>
                    <h3 className="title action-name">Back to home page</h3>
                </div>
                <div className="healthcare-main-info">
                    <h4 className="healthcare-main-category title">Healthcare & Fitness</h4>
                    <h1 className="healthcare-main-title">Healthcare App Development Company</h1>
                    <p className="healthcare-main-desc">
                        We help the medical business build high - quality communication with clients.
                    </p>
                </div>
            </main>
            <div className="container healthcare-container">
                <section className='healthcare-solutions'>
                    <h2 className="title healthcare-bl-title">Medical Solutions</h2>
                    <div className="healthcare-solutions-box d-f jc-sb align-center">
                        <div><img src="/images/healthcare-solutions.png" alt="healthcare-solutions" /></div>
                        <div>
                            <p className="healthcare-solutions-text">
                                Our global goal - create non - standard and effective IT - solutions for business
                                from around the world.
                            </p>
                            <p className="healthcare-solutions-text">
                                We believe that many business processes can be better with healthcare applications
                                and in this article we will explain why.
                            </p>
                            <p className="healthcare-solutions-text">
                                For the past 3 years we have worked with the healthcare industry that's why
                                we know deep problems in this industry. <br />
                                Everyday we help our clients to decide this problems and
                                improve business processes. <br />
                                We can create apps for medical clinics, stomatologies, doctors, beauty
                                businesses and other healthcare companies.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='healthcare-reason'>
                    <h2 className="title healthcare-bl-title">
                        6 reason Why need to Build A Healthcare App?
                    </h2>
                    <p className="healthcare-reason-desc">
                        And now when we have our experience we can say about the most 
                        important reasons to start using healthcare applications
                    </p>
                </section>
            </div>
        </>
    )
}

export default ExpertiseHealthcare