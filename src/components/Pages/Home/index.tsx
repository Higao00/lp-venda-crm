import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import ErrorBoundary from '@/components/ErrorBoundary';

// Componentes com SSR habilitado para melhor SEO
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
    ssr: true,
    loading: () => <Loading lines={4} height="200px" />
});

const Problems = dynamic(() => import('@/components/Problems'), {
    ssr: true,
    loading: () => <Loading lines={3} height="100px" />
});

// Componentes com carregamento otimizado
const Logos = dynamic(() => import('@/components/Logos'), {
    loading: () => <Loading lines={1} height="60px" />
});

const VideoSection = dynamic(() => import('@/components/VideoSection'), {
    loading: () => <Loading lines={3} height="300px" />
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
    loading: () => <Loading lines={5} height="80px" />
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
    loading: () => <Loading lines={2} height="100px" />
});

// Componentes interativos com carregamento tardio
const PromotionalTimer = dynamic(() => import('@/components/PromotionalTimer'), {
    ssr: false,
    loading: () => <Loading lines={1} height="40px" />
});

const ExitIntent = dynamic(() => import('@/components/ExitIntent'), {
    ssr: false
});

export default function Home() {
    return (
        <main>
            <ErrorBoundary>
                <PromotionalTimer />
                <HeroSection />
                <Problems />
                <Logos />
                <VideoSection demoLink="https://crm.projetive.com.br/crm/dashboard" />
                <FAQ />
                <FinalCTA />
                <ExitIntent />
            </ErrorBoundary>
        </main>
    );
}
