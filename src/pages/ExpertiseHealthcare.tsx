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
                    <div className="healthcare-reason-box d-f">
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">Your business will be more effective</h3>
                            <p className="reason-item-desc">
                                Patients will have all information in the app and
                                they will be able to do many things on their own
                            </p>
                        </div>
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">New clients</h3>
                            <p className="reason-item-desc">
                                When doctors have information about patients, the number of clients will increase.
                                Because customer services will be faster and high quality
                            </p>
                        </div>
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">Loyalty of clients</h3>
                            <p className="reason-item-desc">
                                If old and new customers have all information about your  business, doctors, services and news,
                                they will follow you and will trust your company more
                            </p>
                        </div>
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">Economy of time</h3>
                            <p className="reason-item-desc">
                                Business and customers will save time for communication with each other.
                                All information about clients and their problems will be online and you won`t
                                need to use paper documents
                            </p>
                        </div>
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">Marketing tool</h3>
                            <p className="reason-item-desc">
                                Using healthcare applications you can send news and information about the company,
                                create interesting content and inform your patients about special prices or discounts
                            </p>
                        </div>
                        <div className="healthcare-reason-item">
                            <h3 className="reason-item-title">Rapid business growth and scaling</h3>
                            <p className="reason-item-desc">
                                Most healthcare apps deal with sensitive information about
                                patients’ medical issues, so advanced data security is a must
                            </p>
                        </div>
                        <div className="healthcare-reason-item reason-item-huge">
                            <h3 className="reason-item-title">
                                Nowadays IT - solutions for businesses it's a necessary investment
                            </h3>
                            <div className="reason-item-action d-f jc-sb">
                                <h4 className="action-name title">Work with us</h4>
                                <a href="" className="action-link">
                                    <img src="/images/arrow_icon.png" alt="arrow_icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='healthcare-choose'>
                    <h2 className="title healthcare-bl-title">
                        How to choose functional of healthcare app for your business
                    </h2>
                    <p className="healthcare-choose-desc">
                        It's an individual process. When we start working with the new project
                        we start a big analytics job about your business, about your specific
                        problems and your individual goals. After in - depth niche analysis
                        we can offer you options for Healthcare App
                    </p>
                    <div className="healthcare-choose-box d-f jc-sb">
                        <div><img src="/images/healthcare-choose1.png" alt="healthcare-choose1" /></div>
                        <div><img src="/images/healthcare-choose2.png" alt="healthcare-choose2" /></div>
                        <div><img src="/images/healthcare-choose3.png" alt="healthcare-choose3" /></div>
                        <div><img src="/images/healthcare-choose4.png" alt="healthcare-choose4" /></div>
                    </div>
                </section>
                <section className='healthcare-guarantee'>
                    <h2 className="title healthcare-bl-title">Our guarantee in Medical App Development</h2>
                    <div className="healthcare-guarantee-box d-f">
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">1</div>
                            <h3 className="title guarantee-item-title">Hippa</h3>
                            <p className="guarantee-item-desc">
                                We ensure that our mobile apps are HIPAA compliant, which entails that
                                they are secure, confidential information related to the patients and
                                other associated parties like Hospitals and Doctors are protected when
                                they are saved on mobile devices and/or are transmitted via the client-server model
                            </p>
                        </div>
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">2</div>
                            <h3 className="title guarantee-item-title">Fda</h3>
                            <p className="guarantee-item-desc">
                                We’ll check whether your product is compliant with the US Food & Drugs
                                Administration, then recommend necessary changes you’ll need for approval
                            </p>
                        </div>
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">3</div>
                            <h3 className="title guarantee-item-title">Hitech</h3>
                            <p className="guarantee-item-desc">
                                Every mHealth app that we develop abide by the HITECH Act.
                                They successfully pass all the security audits that are made
                                to ensure strict enforcement of the HIPAA based Privacy and Security rules
                            </p>
                        </div>
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">4</div>
                            <h3 className="title guarantee-item-title">Samd</h3>
                            <p className="guarantee-item-desc">
                                We follow the concepts and SaMD risk categories detailed by the International
                                Medical Device Regulators Forum for the medical app development industry
                            </p>
                        </div>
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">5</div>
                            <h3 className="title guarantee-item-title">Hl7</h3>
                            <p className="guarantee-item-desc">
                                We follow the set of international standards for sharing, exchanging,
                                and integrating, retrieving the healthcare information as dictated by
                                the Health Level 7 organization. We also treat the standards as our
                                bicycle when enhancing clinical practice and management
                            </p>
                        </div>
                        <div className="healthcare-guarantee-item">
                            <div className="guarantee-item-num">6</div>
                            <h3 className="title guarantee-item-title">Gdpr</h3>
                            <p className="guarantee-item-desc">
                                Our data collection, processing, and securing process is designed
                                to follow all the stringent GDPR compliance requirements. While
                                the GDPR rules ask for a special protection for sensitive information,
                                we ensure that every data that your application works with is highly secure
                            </p>
                        </div>
                    </div>
                </section>
                <section className='healthcare-claim'>
                    <p className="healthcare-claim-quote">
                        Analysts claim that the global market for medical application
                        development was estimated at $37 billion in 2020. 9 times growth
                        is expected by 2025 and will reach $332.7 billion
                    </p>
                    <div className="healthcare-claim-idea">
                        <h3 className="claim-idea-title title">
                            If you have an idea to start using a healthcare application for your business
                        </h3>
                        <div className="claim-idea-action d-f jc-sb">
                            <h4 className="action-name title">We can help you</h4>
                            <a href="" className="action-link">
                                <img src="/images/arrow_icon.png" alt="arrow_icon" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className='healthcare-trust'>
                    <h2 className="title healthcare-bl-title">Why you can trust our health mobile developers</h2>
                    <div className="healthcare-trust-content d-f jc-sb">
                        <p className="healthcare-trust-desc">
                            Our company has been working in the field of IT development for 10 years.
                            We have only been working for 3 years in the field with the medical business.
                            We have cases with good results and receive positive feedback from our clients 
                            who have developed their business using our solutions
                        </p>
                         <div className="healthcare-trust-info">
                            <dl>
                                <dt>10 years</dt>
                                <dd>on IT development</dd>
                            </dl>
                         </div>
                         <div className="healthcare-trust-info">
                            <dl>
                                <dt>3 years</dt>
                                <dd>on medical business</dd>
                            </dl>
                         </div>      
                    </div>
                </section>
            </div>
        </>
    )
}

export default ExpertiseHealthcare