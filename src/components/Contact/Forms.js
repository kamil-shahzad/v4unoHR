import React from 'react';
import image from '../../assets/images/unoHR/logo.png';
function Forms() {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <img src={image} alt= "Logo here"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h4>Third Party Copyright & Trademarks</h4>
                            <p className='my-3'>
                            <strong>Adobe Systems, Inc.</strong><br/>
                            Adobe®, Adobe Flash®, Adobe Reader®, Adobe Photoshop® and their logos are registered trademarks of Adobe Systems Inc. in the US and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Amazon.com, Inc..</strong><br/>
                            Amazon®, Kindle®, Fire® and all related logos are trademarks of Amazon.com, Inc. or its affiliates.
                            </p>

                            <p className='my-3'>
                            <strong>Apple, Inc.</strong><br/>
                            Apple®, Mac®, Mac OS®, Macbook®, Macbook Pro®, iPhone®, iPad®, iPad Air®, iPod®, iPod touch®, iTunes®, App Store®, Find My Friends®, iMessage®, 
                            QuickTime® and their logos are registered trademarks of Apple Inc. in the United States and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Facebook, Inc.</strong><br/>
                            Facebook® and its logo are trademarks of Facebook, Inc., registered in the United States and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Google, Inc.</strong><br/>
                            Google™, Android™, Google Maps™, Google Play™, Google Docs™, Google Picasa™, Gmail™, Google Chrome™, Google Plus™, 
                            YouTube™ and their logos are trademarks of Google, Inc. in the US and/or other countries.
                            </p>

                            <p className='my-3'>
                            <strong>LinkedIn Corporation</strong><br/>
                            LinkedIn® and its logo are registered trademarks of LinkedIn Corporation and its affiliates in the US and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Microsoft Corporation</strong><br/>
                            Microsoft®, Windows®, Windows XP®, Windows Vista®, Xbox®, Zune®, SharePoint®, Internet Explorer®, Hotmail®, Bing®, 
                            Office®, Word®, PowerPoint®, Excel®, Outlook® and their logos are registered trademarks of Microsoft Corporation in the United States 
                            and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Mozilla Foundation</strong><br/>
                            Mozilla®, Mozilla Firefox® and their logos are registered trademarks of the Mozilla Foundation, in the US and other countries.
                            </p>

                            <p className='my-3'>
                            <strong>Skype</strong><br/>
                            Skype® and its logo are trademarks of Skype in the United States and other countries.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forms;
