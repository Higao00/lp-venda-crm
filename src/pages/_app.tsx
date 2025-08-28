import { Roboto } from 'next/font/google';
import type { AppProps } from "next/app";
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '@/styles/theme/global.styles';
import themeColors from '@/styles/theme/themeColors';
import Layout from '@/components/Layout';
import { optimizeFontLoading, optimizeScriptLoading, useIdleDetection, usePreload } from '@/utils/performance';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
    display: 'swap', // Melhora a performance de carregamento da fonte
    preload: true,
});

// Lista de scripts para otimizar
const scriptUrls = [
    'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID'
    // Adicione outros scripts aqui
];

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { preloadPage } = usePreload();

    // Otimiza carregamento de recursos
    useEffect(() => {
        optimizeScriptLoading(scriptUrls);
    }, []);

    // Preload da próxima página quando o usuário estiver inativo
    useIdleDetection(() => {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (link.href && link.href.startsWith(window.location.origin)) {
                preloadPage(link.href);
            }
        });
    }, 3000); // 3 segundos de inatividade

    // Registra performance metrics
    useEffect(() => {
        const reportWebVitals = (metric: any) => {
            console.log(metric);
            // Aqui você pode enviar as métricas para seu analytics
        };

        // @ts-ignore
        window.reportWebVitals = reportWebVitals;
    }, []);

    return (
        <div className={roboto.className}>
            <ThemeProvider theme={themeColors}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}