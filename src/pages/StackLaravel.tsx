import React from 'react'
import { Link } from 'react-router-dom'
import './css/StackLaravel.css'
import Contact from './Contact'

const StackLaravel = () => {
    return (
        <>
            <main className="laravel-main">
                <div className="laravel-main-back d-f">
                    <Link to='/' className="action-link">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6.5L1 6.5M1 6.5L6.5 12M1 6.5L6.5 1" stroke="white" />
                        </svg>
                    </Link>
                    <h3 className="title action-name">Back to home page</h3>
                </div>
                <div className="laravel-main-info">
                    <h4 className="laravel-main-category title">Laravel</h4>
                    <h1 className="laravel-main-title">Laravel Development Company</h1>
                    <p className="laravel-main-desc">
                        We help the medical business build high - qIn this article, we will talk about
                        the Laravel framework, which is now very often used in startups and in large system businesses.
                        You will find out why and what are the benefits of working with Laraveluality communication with clients.
                    </p>
                </div>
            </main>
            <div className="container laravel-container">
                <section className='laravel-about'>
                    <h2 className="title laravel-bl-title">What is Laravel</h2>
                    <div className="laravel-about-box d-f align-center">
                        <div><img src="/images/laravel-about.png" alt="laravel-about" /></div>
                        <p className="laravel-bl-text laravel-about-desc">
                            Laravel is one of the best PHP frameworks for developing commercial web applications.
                            It was approved by developers from all over the world. Today Laravel development
                            companies create effective solutions for startups and big businesses. This framework
                            is already used by companies from the USA, Europe, Australia and UAE. Maybe the next
                            Laravel projects will be yours
                        </p>
                    </div>
                </section>
                <section className="laravel-benefits">
                    <h2 className="title laravel-bl-title">Benefits of Laravel web development services</h2>
                    <p className="laravel-bl-text laravel-benefits-desc">
                        Being the Best Laravel Application Development Company, we can tell
                        you why should you choose or move on to the most loved PHP Framework, Laravel
                    </p>
                    <div className="laravel-benefits-box d-f">
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">1</div>
                            <h3 className="benefits-item-title title">Ease of use</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                Laravel is an easy start for developing startups.
                                The multifunctionality of the framework solves many problems
                                with the design of a complex project architecture, as well as
                                scalability in the future. Simplified authentication process
                                inbuilt in the framework. This ensures that authentication
                                remains an easy process for the users
                            </p>
                        </div>
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">2</div>
                            <h3 className="benefits-item-title title">Popularity among developers</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                A product on Laravel is easy to maintain and to find developers for your
                                project from a large number of adherents of the framework. Open source
                                allows anyone to participate in the modernization of the framework
                                and its third-party applications. Therefore, you will not have any problems
                                if you need to make changes in the future
                            </p>
                        </div>
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">3</div>
                            <h3 className="benefits-item-title title">Easy to scale</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                Applications built with Laravel are easy to scale. When you need to scale
                                your Laravel application, you just go ahead and scale it. The framework
                                has native tools such as Laravel Cache for caching, Laravel Horizon for queuing,
                                and other services like Eloquent that can leverage the power of cloud services.
                                A Laravel project can be integrated with GitHub, CircleCI, Docker,
                                Amazon Web Services, and so on
                            </p>
                        </div>
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">4</div>
                            <h3 className="benefits-item-title title">Great opportunities</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                Laravel is an open source project Laravel is a 100% open source project.
                                This opens up great opportunities for customization, modification and
                                extension, and here Laravel outperforms many popular frameworks.
                                It`a give ability to generate new tools within the framework to help
                                you develop apps more effectively
                            </p>
                        </div>
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">5</div>
                            <h3 className="benefits-item-title title">High level of security</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                Laravel has certain features that make it easy to implement authorization.
                                This prevents unauthorized persons from accessing protected content.
                                According to a Positive Technologies report, 100% of Internet applications
                                have at least one security-sensitive element. 85% of them pose a threat to users.
                                Of course, no framework is completely flawless, but Laravel is regularly updated
                                to make it more secure for business applications
                            </p>
                        </div>
                        <div className="laravel-benefits-item">
                            <div className="benefits-item-num">6</div>
                            <h3 className="benefits-item-title title">Return on investment</h3>
                            <p className="laravel-bl-text benefits-item-desc">
                                And one of the most important reasons for using Laravel
                                for business is the return on investment, which also makes
                                this framework an attractive solution for businesses.
                                Laravel adheres to the principle of code reuse, so developers
                                can use additional modules. A highly personalized and scalable
                                platform provides higher margins than other technologies of this type
                            </p>
                        </div>
                    </div>
                </section>
                <section className='laravel-trends d-f'>
                    <div><img src="/images/laravel-trends.png" alt="laravel-trends" /></div>
                    <div>
                        <h3 className="laravel-trends-title title">
                            These are the main reasons and business benefits that
                            make Laravel the leaders in PHP development today
                        </h3>
                        <p className="laravel-bl-text laravel-trends-desc">
                            The confirming fact is the popularity of Laravel
                            in the world search engine analytics systems.
                        </p>
                    </div>
                </section>
                <section className='laravel-help'>
                    <h2 className="title laravel-bl-title">Why our team can help you</h2>
                    <p className="laravel-bl-text laravel-help-desc">
                        Our expert Laravel developers will be able to find you the perfect
                        solutions for your project and budget.
                    </p>
                    <div className="laravel-help-examples">
                        <h3 className="help-examples-title title">
                            Here you can see examples of our projects using Laravel
                        </h3>
                        <div className="help-examples-action d-f">
                            <h4 className="action-name title">See examples</h4>
                            <a href="" className="action-link"><img src="/images/arrow_icon.png" alt="arrow_icon" /></a>
                        </div>
                    </div>
                    <div className="laravel-help-box d-f">
                        <p className="laravel-bl-text laravel-help-text">
                            You can hire our Laravel development team for maximum results in your business
                        </p>
                        <p className="laravel-bl-text laravel-help-text">
                            Our team is distinguished by a customer-oriented approach.
                            Sometimes we can even argue about your desires, but this is only in
                            one case if we know that it will not bring an effective result to your project
                        </p>
                        <p className="laravel-bl-text laravel-help-text">
                            We will help you find an individual solution for your budget
                            that can solve your main problems and improve your business processes
                        </p>
                        <p className="laravel-bl-text laravel-help-text">
                            In addition to providing you extraordinary Laravel development services,
                            we provide you with the 24/7 support you’ll need in the post-development stagings
                        </p>
                    </div>
                </section>
                <section className='laravel-conclusion'>
                    <h2 className="title laravel-bl-title">In conclusion</h2>
                    <p className="laravel-bl-text laravel-conclusion-desc">
                        If you are looking for the best development solution for your commercial
                        project, large or small, then you should definitely pay attention to Laravel
                        because of a number of advantages that we wrote about earlier.
                    </p>
                    <div className="laravel-conclusion-box d-f">
                        <p className="laravel-conclusion-text">
                            We have the necessary expertise that will help you understand
                            all the intricacies of the work of the framework and select
                            individual solutions for your business.
                        </p>
                        <p className="laravel-conclusion-text">
                            Our Laravel experts develop and improve their skills every day
                            in order to bring results to our clients.
                        </p>
                    </div>
                    <div className="laravel-conclusion-build">
                        <h3 className="conclusion-build-title title">Let's build the result of your business together</h3>
                        <div className="conclusion-build-action d-f jc-sb">
                            <h4 className="action-name title">Contact us</h4>
                            <a href="" className="action-link"><img src="/images/arrow_icon.png" alt="arrow_icon" /></a>
                        </div>
                    </div>
                </section>
            </div>
            <Contact/>
        </>
    )
}

export default StackLaravel