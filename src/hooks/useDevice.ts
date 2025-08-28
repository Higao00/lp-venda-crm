import { useState, useEffect } from 'react';

interface UseDeviceReturn {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export function useDevice(): UseDeviceReturn {
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile: windowWidth < 768,
        isTablet: windowWidth >= 768 && windowWidth < 1024,
        isDesktop: windowWidth >= 1024
    };
}

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia(query);
        const updateMatch = () => setMatches(media.matches);

        updateMatch();
        media.addEventListener('change', updateMatch);

        return () => media.removeEventListener('change', updateMatch);
    }, [query]);

    return matches;
}
