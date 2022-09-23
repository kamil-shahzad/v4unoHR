import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import CapPrivacy from './components/FooterInfo/CapPrivacy';
import Thirdparty from './components/FooterInfo/Thirdparty';
import PrivacyPolicy from './components/FooterInfo/PrivacyPolicy';
import Terms from './components/FooterInfo/Terms'
import HomeOne from './components/HomeOne';
import Service from './components/Service';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`unoHR-loader ${loading ? 'active' : ''}`}>
                </div>
            )}
            <div className={`unoHR-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                        <Switch>
                            <Route exact path="/" component={HomeOne} />
                            <Route exact path="/thirdparty" component={Thirdparty}/>
                            <Route exact path= "/caprivacy" component={CapPrivacy}/>
                            <Route exact path="/Terms" component={Terms}/>
                            <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
                            <Route exact path="/contact" component={Contact} />
                            <Route component={Error} />
                        </Switch>
                </Router>
            </div>
        </>
    );
}

export default Routes;
