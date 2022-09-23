import React from 'react';
import blogOne from '../../assets/images/blog-1.jpg';
import blogTwo from '../../assets/images/blog-2.jpg';
import blogThree from '../../assets/images/blog-3.jpg';

function BlogHomeOne({ className }) {
    return (
        <>
            <section className={`appie-blog-area pt-90 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="appie-section-title text-center">
                                <h3 className="appie-title">Blog</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={blogOne} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li  style={{color: '#0e1133'}}>March 10, 2022</li>
                                            <li  style={{color: '#0e1133'}}>
                                                <a href="#"  style={{color: '#0e1133'}}>Saas & App</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news"  style={{color: '#0e1133'}}>
                                            Introducing New Apps Design for our iOS App
                                        </a>
                                    </h3>
                                    <a href="#"  style={{color: '#0e1133'}}>
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={blogTwo} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li  style={{color: '#0e1133'}}>March 10, 2022</li>
                                            <li>
                                                <a href="#"  style={{color: '#0e1133'}}>Saas & App</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news"  style={{color: '#0e1133'}}>
                                            How to bring Dolce to your company
                                        </a>
                                    </h3>
                                    <a href="#"  style={{color: '#0e1133', margintop : '30px'}}>
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src={blogThree} alt="" />
                                </div>
                                <div className="contents"  style={{color: '#0e1133'}}>
                                    <div className="blog-meta">
                                        <ul  style={{color: '#0e1133'}}>
                                            <li  style={{color: '#0e1133'}}>March 10, 2022</li>
                                            <li>
                                                <a href="#"  style={{color: '#0e1133'}}>Saas & App</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news"  style={{color: '#0e1133'}}>
                                            17 Effective Ways to Monetize Mobile Apps
                                        </a>
                                    </h3><div style={{margintop: '20px'}}> </div>
                                    <a href="#"  style={{color: '#0e1133'}}>
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
