import { useState, useEffect} from 'react';

export const useMobile = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    const modifyWindowWidth = () => setInnerWidth(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize', modifyWindowWidth)
        return () => window.removeEventListener('resize', modifyWindowWidth)
    });

    return {
        innerWidth,
        isMobile: innerWidth < 800
    }
}