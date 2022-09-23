import React, { useState } from 'react';

function PricingHomeOne({ className }) {
    const [toggleSwitch, setSwitchValue] = useState(true);
    return (
        <>
            <section className={`unoHR-pricing-area pt-90 pb-90 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="unoHR-section-title text-center">
                                <h3 className="unoHR-title">Choose your plan</h3>
                                <p>No Contract | No Signup Fee | No Direct Deposit Fee | No Filling Fees</p>
                            </div>
                            <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month`}>
                                    <a href="#">Monthly</a>
                                </li>                           
                            </ul>
                        </div>
                    </div>
                    <div className="tabed-content">
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Core Features</h6>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> Employee On-Boarding
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Background Checks
                                                    </li>
                                                   
                                                    <li>
                                                        <i className="fal fa-check" /> Clock in & Clock out
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Timesheets
                                                    </li>
                                                  
                                                    <li>
                                                        <i className="fal fa-check" /> Task Mangement
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Taskner App (IOS & Android)
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Notifications
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Alerts
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> SMS (included)
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Digital Signature (Included)
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Mobile App (IOS & Android)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <div className="price-range">
                                                    <sup>$</sup> <span>30</span>
                                                    <p>/month</p>
                                                </div>
                                                <p>All core features included.</p>
                                            </div>
                                             <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> One Employee Included.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Standard Background Check.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Mobile (IOS & Amdroid).
                                                    </li> <li>
                                                        <i className="fal fa-check" /> Additional Employees $10/month.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Additional options extra $.
                                                    </li>
                                                </ul>
                                    
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Sign Up
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Plus</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                    <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <div className="price-range">
                                                    <sup>$</sup> <span>60</span>
                                                    <p>/month</p>
                                                </div>
                                                <p>All core features PLUS Payrolls & Tax Billing.</p>
                                            </div>
                                          

                                                <div className="pricig-heading">
                                                <p>Additionals.</p>
                                                </div>  <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> Payroll.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Tax Paperwork.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Employee W-2.
                                                    </li> <li>
                                                        <i className="fal fa-check" /> Schedule H.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Generate W2 and W3.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Mobile App (IOS & Android).
                                                    </li>
                                                </ul>
                                                <div className="pricig-body">
                                                <ul>  
                                                <li>
                                                        <i className="fal fa-check" /> One Employee Included.
                                                    </li>  
                                                    <li>
                                                        <i className="fal fa-check" /> Additional Employee $10/Month
                                                    </li>     
                                                    <li>
                                                        <i className="fal fa-check" /> Additional ADDONs Extra
                                                    </li>                                           
                                                </ul>
                                               </div>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Sign Up
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                        {/* <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Our Guarentee</h6>
                                            </div>
                                            <div className="pricig-body">
                                                <p>
                                                    Our 30 days Guarentee if you decide to close ypur account with in 30 days of Signing up.
                                                    <br/> We will refund 100% of your payment.
                                                </p>
                                                <div className="pricing-btn mt-35">
                                                <p>
                                                    AARP and Veteran Discount.
                                                    <br/> We offer eligible AARP and Veteran Discount of 10% at SignUp.
                                                </p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
