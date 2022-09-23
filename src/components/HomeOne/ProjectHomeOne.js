import React from 'react';
import projectThumb from '../../assets/images/project-thumb.png';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section className={`unoHR-project-area pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="unoHR-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="unoHR-project-content">
                                            <h3 className="title">
                                                Start your project with unoHR.
                                            </h3>
                                            <p>We will email you only about this product.</p>
                                            <form action="#">
                                                <div className="input-box mt-30">
                                                    <input type="text" placeholder="Your Email" />
                                                    <button type="button">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="unoHR-project-thumb">
                                    <img src={projectThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
