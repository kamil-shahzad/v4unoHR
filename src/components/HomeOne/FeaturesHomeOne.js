import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/unoHR/taskner.webp';
import task1 from '../../assets/images/unoHR/task1.webp';
import task2 from '../../assets/images/unoHR/task5.png';
import task3 from '../../assets/images/unoHR/task6.webp';

function FeaturesHomeOne({ className }) {
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`unoHR-features-area pt-100 ${className}`} id="features">
            <div className="container">
            <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="unoHR-section-title text-center">
                            <h3 className="unoHR-title">
                                Taskner <br /> 
                            </h3>
                            <p>Our Task Management App</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="unoHR-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-cog" /> Task Setup
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-exclamation-triangle" /> Update Tasks
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'notice')}
                                    className={`nav-link ${tab === 'notice' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-messages"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-bell" /> Alerts
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'app')}
                                    className={`nav-link ${tab === 'app' ? 'active' : ''}`}
                                    id="v-pills-messages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-settings"
                                    role="tab"
                                    aria-controls="v-pills-settings"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-lock" /> Transfer Shift
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Taskner</span>
                                            <h3 className="title">
                                                Task Setup<br /> 
                                            </h3>
                                            <p>
                                                It makes the task set process easier for you and your employees. Optimizes and Increase the work process efficiently.
                                            </p>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={task1} alt="" style={{width: '100vh', height:'55vh'}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Taskner</span>
                                            <h3 className="title">
                                            Update Tasks <br />
                                            </h3>
                                            <p>
                                            It select the Status to which the Task(s) should be updated. Update the Assignee to whoch the Task(s) belong.
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'notice' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={task2} alt="" style={{width: '100vh', height:'55vh'}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Taskner</span>
                                            <h3 className="title">
                                                Alerts<br />
                                            </h3>
                                            <p>
                                             You can add schedule alerts to trigger according to the days, times and frequencies they specify. Also set up filter alerts when certain thresholds are met such as amounts and dates.
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={task3} alt="" style={{width: '180vh', height:'55vh'}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="unoHR-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Taskner</span>
                                            <h3 className="title">
                                                Transfer Shift <br /> 
                                            </h3>
                                            <p>
                                                Shift change checklist adn transfer. This check list assits you to control the move changes every shift.
                                            </p>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </section>
    );
}

export default FeaturesHomeOne;
