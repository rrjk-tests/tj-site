import React from 'react'
import Home from './Home'
import { Helmet } from 'react-helmet'

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>TheatreJS - Web-based animation tool</title>
                <meta name="description" content="web-based animation tool" />
                <meta name="keywords" content="animations,js,theatre" />
            </Helmet>
            <Home />
        </React.Fragment>
    )
};