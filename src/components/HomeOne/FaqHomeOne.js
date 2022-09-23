import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(0);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section  className={`appie-blog-area pt-90 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="unoHR-section-title text-center">
                                <h3 className="unoHR-title">Frequently asked questions</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Am I considered a household employer?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    if you hired someone to do household work (work done in or around your primary home) 
                                                    and paid $2200 in 2020 or $1000 in a calendar quarter then you are considered household 
                                                    employer. The worker is your employee if you can control not only what work is done, 
                                                    but how it is done. Some examples of household employees: Babysitters, Butlers, 
                                                    Caregivers, Cooks, Domestic workers, Drivers, Health aides, House cleaning workers, 
                                                    Housekeepers, Maids, Nannies, Private nurses, and Yard workers. See IRS publication 
                                                    926 for detailed definitions.
                                                    https://www.irs.gov/publications/p926
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What are my obligations as a household employer?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Here are five core obligations as a household employer.
                                                    <br/>
                                                    1) Obtain Employer identification number (EIN).IRS.gov/EIN.<br/>
                                                    2) Register & file “new hiring report” for each hire with state and local agencies.<br/>
                                                    3) Every pay period - Withhold Social Security, Medicare and income taxes from the employee’s paycheck and make employer federal & state contributions.<br/>
                                                    4) Quarterly - Submit the proper paperwork and payments IRS, state & others.<br/>
                                                    5) Year-end - Prepare employer Schedule H and issue employee W-2.<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What taxes are paid and how are they collected?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Every pay period household employer taxes are<br/> 1) Payroll tax withheld from the employee <br/> 2) the employer tax contribution. 
                                                    Both of these amounts are withdrawn from Employer bank account and remitted along with paperwork.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What Forms are needed for Household Employer?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                     Form SS-4: Fill out Form SS-4 or apply online through the IRS to obtain your federal Employee Identification Number (FEIN) which you’ll need for tax forms.<br/>
                                                    <b>Form I-9:</b> Have your nanny complete this form when hired and be sure she provides you with documents proving employment eligibility.<br/>
                                                    <b>Form W-2: </b>Complete Form W-2 if you pay Social Security and Medicare wages of $2,200 or more or if you deduct income taxes from your employee’s pay. Give Copies B, C and 2 to your employee. Copy A (along with Form W-3) goes to the Social Security.<br/>
                                                    Schedule H: If you pay your nanny wages of $2,200 or more or if you paid $1,000 or more in a calendar quarter you must file Schedule H with your federal income tax return
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(5)}
                                        className={`accrodion ${showQues === 5 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What laws apply to household employers?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 5 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Depending on your residency and tax situation many laws apply to the household employer. Please consult your tax advisor. We do not provide legal or employment advice. Here are some the laws that commonly apply to household employers:$<br/>
                                                   1) Employer Taxes<br/>
                                                   2) Minimum Wage laws<br/>
                                                   3) Overtime Laws
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(6)}
                                        className={`accrodion ${showQues === 6 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Do you find employees for me?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 6 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    No, we do not find employees with our service. Our services begin once you identify and decide to hire an employee. We do rest of the work from that point on.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(7)}
                                        className={`accrodion ${showQues === 7 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>DO I have to provide vacation, holiday, and sick pay?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 7 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Household employers generally do not need to provide vacation or holiday pay. 
                                                    Household employers in some cities and states are required to provide sick pay for their employees (typically based on their employee's hours worked).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(8)}
                                        className={`accrodion ${showQues === 8 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How are you different from other people?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 8 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Our all-in-one platform is designed to do all functions to manager household employees. Those functions are: On-Boarding, background checks, task manager, timesheets, payroll and employee rewards. 
                                                    Our platform is built from scratch to meet the needs of household employers and you can use the app entirely on any smartphone (IOS or Android).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(9)}
                                        className={`accrodion ${showQues === 9 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Do I have to provide worker's compensation insurance?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 9 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    <b>Depending on where you live</b> ,states require household employers to carry a workers’ compensation policy depending on whether your employee works part-time or full-time. 
                                                    This type of policy will provide compensation to an employee who is injured on the job. Even if your state does not require it, 
                                                    we strongly advise you to obtain coverage for your employee. We provide links to obtain workers compensation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(10)}
                                        className={`accrodion ${showQues === 10 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>What your fees, contracts and cancellation terms?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 10 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                     <p>
                                                    Our pricing is simple and straightforward, $40 per month that includes 1 employee with standard background check. 
                                                    No contracts, hidden fees, no additional sign-up, quarterly, annual and a la carte costs. Each additional employee $10 per month.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>













                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="mailto:demo@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
