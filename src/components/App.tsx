import React, { useState, useEffect } from 'react'
import Home from './Home'
import { Helmet } from 'react-helmet'
import { useScrollbarCheck } from '../shared/os';
import ScrollBar, { ScrollContext } from '../shared/ScrollBar';

export default () => {
    const haveUglyScroll = useScrollbarCheck()
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        if (haveUglyScroll) return
        window.addEventListener('scroll', modifyScrollUsingWindow)
        return () => window.removeEventListener('scroll', modifyScrollUsingWindow)
    }, [haveUglyScroll])

    const modifyScrollUsingWindow = (e: any) => {
        setScroll(window.scrollY)
    }
    const modifyScrollUsingVirtualScrollbar = (e: any) => {
        setScroll(e.target.scrollTop)
    }

    const app = haveUglyScroll ?
        (<ScrollBar onScroll={modifyScrollUsingVirtualScrollbar}><Home /></ScrollBar>) :
        (<Home />)

    return (
        <div style={{height: '100vh'}}>
            <Helmet>
                <title>TheatreJS - Web-based animation tool</title>
                <meta name="description" content="web-based animation tool" />
                <meta name="keywords" content="animations,js,theatre" />
            </Helmet>
            <ScrollContext.Provider value={scroll}>
                {app}
            </ScrollContext.Provider>
        </div>
    )
};