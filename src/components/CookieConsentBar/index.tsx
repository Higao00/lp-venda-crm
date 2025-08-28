'use client';

import { useEffect, useState } from 'react';
import * as S from './styles';
import Link from 'next/link';

const STORAGE_KEY = 'site:privacy-consent:v1';

type ConsentValue = 'accepted' | 'rejected' | null;

export default function CookieConsentBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const current = (localStorage.getItem(STORAGE_KEY) as ConsentValue) || null;
        setVisible(current === null);
    }, []);

    const setConsent = (value: ConsentValue) => {
        if (typeof window === 'undefined') return;
        if (value) localStorage.setItem(STORAGE_KEY, value);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <S.Bar
            role="dialog"
            aria-live="polite"
            aria-label="Preferências de privacidade e cookies"
        >
            <S.TextWrap>
                <S.Title>Privacidade & Cookies</S.Title>
                <S.Text>
                    Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo.
                    Ao clicar em “Aceitar”, você concorda com o uso conforme nossa{' '}
                    <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
                </S.Text>
            </S.TextWrap>

            <S.Actions>
                <S.Secondary onClick={() => setConsent('rejected')} aria-label="Rejeitar cookies">
                    Rejeitar
                </S.Secondary>
                <S.Primary onClick={() => setConsent('accepted')} aria-label="Aceitar cookies">
                    Aceitar
                </S.Primary>
            </S.Actions>
        </S.Bar>
    );
}
