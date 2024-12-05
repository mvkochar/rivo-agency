import React from 'react'

const Reviews = () => {
    return (
        <section className='home-reviews'>
            <h2 className="title home-bl-title">Reviews</h2>
            <div className="home-reviews-content d-f">
                <div className="home-reviews-video"><img src="/images/reviews-video.png" alt="reviews-video" /></div>
                <div>
                    <div className="home-reviews-caption d-f jc-sb">
                        <h4 className="title home-reviews-category">Collective Filmsfotografie</h4>
                        <div className="home-reviews-num">01</div>
                    </div>
                    <h3 className='home-reviews-author'>Charlotte Preisel</h3>
                    <div className="home-reviews-details d-f align-center">
                        <div><img src="/images/cloch_logo.svg" alt="cloch_logo" /></div>
                        <div>
                            <div className="home-reviews-rating d-f">
                                <div><img src="/images/star.png" alt="star" /></div>
                                <div><img src="/images/star.png" alt="star" /></div>
                                <div><img src="/images/star.png" alt="star" /></div>
                                <div><img src="/images/star.png" alt="star" /></div>
                                <div><img src="/images/star.png" alt="star" /></div>
                            </div>
                            <div className="home-reviews-date">20.12.2020</div>
                        </div>
                        <a href="" className="d-b"><img src="/images/linkedIn_icon.png" alt="linkedIn_icon" /></a>
                    </div>
                    <div className="arrow-actions d-f">
                        <button><img src="/images/prev.png" alt="prev" /></button>
                        <button><img src="/images/next.png" alt="next" /></button>
                    </div>
                </div>
            </div>
            <progress max={100} value={40}></progress>
        </section>
    )
}

export default Reviews