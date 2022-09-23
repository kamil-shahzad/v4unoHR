import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/unoHR/logo.png';
import Formsf from './Formsf';
function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`unoHR-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-about-widget">
                            <div className="unoHR-logo-box">
                                    <a href="/">
                                    <img src={logo} alt="" style={{width: '25vh', height: '8vh'}} />
                                    </a>
                              <p style={{color: 'grey' , fontSize:'13px'}}>
                                    unoHR is all-in-one innovative, simple to houshold employees management software that
                                    helps employers with all the features needed to manage onboarding, background checks, 
                                    task manager, timesheets, payroll and employee rewards. Our cloud bases platform is 
                                    easy to use and can be run entirely from your mobile phone (IOS & Android). Alerts and
                                    notifications, makes it easier not to miss daily tasks & deadlines.
                                </p> </div>
                             
                            </div>
                        
                        </div>
                      

                        
                    
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Features</Link>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                  <Formsf/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                              
                             
                            <div className="copyright-text" style={{color: 'grey' , paddingLeft:'27vh'}}>
                                    <p>unoHR is registered trademarks of WorkScaler Inc</p>
                                    <p> <ul><Link className='link' to='/thirdparty'>© 2022 WorkScaler inc. | All third party trademarks are the property of their respective owners.</Link></ul></p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                              
                            <div className="copyright-text2" style={{color:'grey', paddingRight:'20vh', paddingTop: '5px'}}>
                                <ul><Link to="/caprivacy" style={{color:'grey'}}>CA Privacy Rights |</Link></ul>
                                <ul><Link to="/privacypolicy" style={{color:'grey'}}>Privacy Policy |</Link></ul>
                                <ul><Link to="/Terms" style={{color:'grey'}}>Terms and Service</Link></ul>
                               
                               
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
