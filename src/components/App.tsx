import React from 'react'
import Home from './Home'
import { Helmet } from 'react-helmet'
import { useScrollbarCheck } from '../shared/os';
import ScrollBar from '../shared/ScrollBar';

export default () => {
    const haveUglyScroll = useScrollbarCheck()

    const app = haveUglyScroll ? (<ScrollBar><Home /></ScrollBar>) : (<Home />)

    return (
        <div style={{ height: '100vh' }}>
            <Helmet>
                <title>TheatreJS - Web-based animation tool</title>
                <meta name="description" content="web-based animation tool" />
                <meta name="keywords" content="animations,js,theatre" />
            </Helmet>
            {app}
        </div>
    )
};