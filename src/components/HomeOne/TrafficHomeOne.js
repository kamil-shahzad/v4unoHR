import React from 'react';
import thumb from '../../assets/images/unoHR/taskner4.jpg';

function TrafficHomeOne({ className }) {
    return (
        <section className={`unoHR-traffic-area pt-140 pb-70 ${className || ''}`}>
            <div className="container">
            <div className="unoHR-section-title text-center">
                            <h3 className="unoHR-title">
                                Features <br /> 
                            </h3>
                            <p>Comprehensive features set to manage housold employees</p>
                        </div>
                <div className="row my-5">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="unoHR-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Task Manager</h5>
                                    <p>Manage daily tasks to employees. <br/>Engage with employees. 
                                        Enagage with employees with Tasks, SMS Email reminders to complete the tasks.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="unoHR-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Paperless On-boarding </h5>
                                    <p>Setup your account and register with IRS and State if needed. Employee on-boarding and Background checks</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="unoHR-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Payroll Management</h5>
                                    <p>Generalte payroll calculations & statements for employees and employer.<br/>
                                        Prepare and file monthly/quarterly taxes.
                                    
                                     </p>
                                </div>
                            </div>                 
                            <div className="col-lg-6 col-md-6">
                                <div className="unoHR-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Time Tracking</h5>
                                    <p>Track and improve employee tome for payroll <br/>
                                        Employees daily check-out, weekly review and submit for payroll.
                                    </p>
                                </div>                        
                            </div>   
                        
                            <div className="col-lg-6 col-md-6 my-4">
                                <div className="unoHR-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Tax Paperwork & Records</h5>
                                    <p>Year-end preparation and distribution 0f W-2, W-3 and Schedule H. Records for Employees, tax and payroll are archieve for easy access.<br/>      
                                     </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 my-4">
                                <div className="unoHR-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Alerts and Notifications</h5>
                                    <p>Alerts and email notifications that are automatically triggered when the certain criteria is enabled by the users. <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
