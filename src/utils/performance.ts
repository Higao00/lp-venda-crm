import { useEffect, useCallback } from 'react';

// Hook para detectar quando o usuário está inativo
export function useIdleDetection(onIdle: () => void, idleTime = 60000) {
    useEffect(() => {
        let idleTimer: NodeJS.Timeout;

        const resetTimer = () => {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(onIdle, idleTime);
        };

        const events = [
            'mousemove',
            'keydown',
            'wheel',
            'touchstart',
            'scroll'
        ];

        // Inicia o timer
        resetTimer();

        // Adiciona os event listeners
        events.forEach(event => {
            window.addEventListener(event, resetTimer);
        });

        // Cleanup
        return () => {
            clearTimeout(idleTimer);
            events.forEach(event => {
                window.removeEventListener(event, resetTimer);
            });
        };
    }, [onIdle, idleTime]);
}

// Hook para precarregar recursos
export function usePreload() {
    const preloadImage = useCallback((src: string) => {
        const img = new Image();
        img.src = src;
    }, []);

    const preloadPage = useCallback((url: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }, []);

    return { preloadImage, preloadPage };
}

// Função para otimizar carregamento de fontes
export function optimizeFontLoading(fontUrls: string[]) {
    fontUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
}

// Função para otimizar carregamento de scripts
export function optimizeScriptLoading(scriptUrls: string[]) {
    scriptUrls.forEach(url => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    });
}

// Hook para interseção com Intersection Observer
export function useIntersectionObserver(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
) {
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        return () => observer.disconnect();
    }, [callback, options]);
}

// Função para medir performance
export function measurePerformance(label: string, callback: () => void) {
    if (process.env.NODE_ENV === 'development') {
        console.time(label);
        callback();
        console.timeEnd(label);
    } else {
        callback();
    }
}
