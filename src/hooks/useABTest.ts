import { useState, useEffect } from 'react';

type Variant = 'A' | 'B';

interface ABTestConfig {
    testId: string;
    variants: {
        A: any;
        B: any;
    };
}

// Função para salvar os resultados do teste
const saveTestResult = (testId: string, variant: Variant, event: string) => {
    // Aqui você pode implementar a lógica para salvar os resultados
    // Por exemplo, enviar para Google Analytics ou sua própria API
    const testData = {
        testId,
        variant,
        event,
        timestamp: new Date().toISOString(),
        sessionId: localStorage.getItem('sessionId') || 'unknown'
    };

    // Log para desenvolvimento
    // console.log('A/B Test Result:', testData);
};

export function useABTest<T>({ testId, variants }: ABTestConfig): [T, (event: string) => void] {
    const [variant, setVariant] = useState<Variant>('A');
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || initialized) return;

        // Verifica se o usuário já está em um grupo de teste
        const storedVariant = localStorage.getItem(`ab_test_${testId}`);
        
        if (storedVariant === 'A' || storedVariant === 'B') {
            setVariant(storedVariant);
        } else {
            // Distribui aleatoriamente entre A e B
            const newVariant: Variant = Math.random() < 0.5 ? 'A' : 'B';
            localStorage.setItem(`ab_test_${testId}`, newVariant);
            setVariant(newVariant);
        }

        setInitialized(true);
        
        // Registra a visualização do teste
        saveTestResult(testId, variant, 'view');
    }, [testId, initialized]);

    const trackEvent = (event: string) => {
        saveTestResult(testId, variant, event);
    };

    return [variants[variant], trackEvent];
}

// Tipos úteis para os testes
export interface CTAVariants {
    buttonText: string;
    buttonColor: string;
    title: string;
    description: string;
}

export interface HeroVariants {
    headline: string;
    subheadline: string;
    buttonText: string;
}

export interface PricingVariants {
    displayPrice: string;
    showDiscount: boolean;
    discountPercentage?: number;
}

// Hook específico para testes de CTA
export function useCTATest(testId: string, variants: { A: CTAVariants; B: CTAVariants }) {
    return useABTest<CTAVariants>({ testId, variants });
}

// Hook específico para testes de Hero
export function useHeroTest(testId: string, variants: { A: HeroVariants; B: HeroVariants }) {
    return useABTest<HeroVariants>({ testId, variants });
}

// Hook específico para testes de Pricing
export function usePricingTest(testId: string, variants: { A: PricingVariants; B: PricingVariants }) {
    return useABTest<PricingVariants>({ testId, variants });
}
