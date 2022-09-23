import React from 'react';
import heroThumbOne from '../../assets/images/unoHR/heroimg.png';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`unoHR-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="unoHR-hero-content">
                                <span>Welcome to unoHR</span>
                                <h1 className='heroheading'>
                                    All-in-one solution<br/> to manage<br/>
                                Household Employees</h1>
                                <p style={{lineHeight: '2.5rem'}}>
                                    unoHR is a simple and easy to use household employees management application that can be entirely run on
                                    smartphones and tablets.<br/>
                                   <strong> On-boarding | Task Manager | Timesheets | Payroll | Tax Filings</strong>
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" /> Download for iOS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Download for
                                            Android
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="unoHR-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroThumbOne} alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    {/* <img src={heroThumbTwo} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">

                    {/* animation images in the background */}
                    {/* <img src={shapeTwo} alt="" /> */}
                </div>
                <div className="hero-shape-2">
                          {/* animation images in the background */}


                    {/* <img src={shapeThree} alt="" /> */}
                </div>
                <div className="hero-shape-3">
                          {/* animation images in the background */}


                    {/* <img src={shapeFour} alt="" /> */}
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
