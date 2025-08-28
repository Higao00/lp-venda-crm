import styled from "styled-components"

export const Page = styled.section`
    min-height: 100vh;
    width: 100%;
    background: radial-gradient(1200px 800px at 20% 20%, rgba(14, 165, 166, 0.18), transparent 60%), radial-gradient(1000px 700px at 80% 30%, rgba(1, 57, 92, 0.25), transparent 65%),
        linear-gradient(180deg, #0b1220 0%, #0a1020 50%, #0b1220 100%);
    color: #e5e7eb;
    display: grid;
    place-items: center;
    padding: 20px;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr; /* mobile stack */

    @media (min-width: 861px) {
        gap: 32px;
        grid-template-columns: 1.05fr 1fr; /* cubo | texto */
        align-items: center;
    }
`

export const CanvasPane = styled.div`
    order: 2; /* mobile: cubo embaixo */
    @media (min-width: 861px) {
        order: 1;
    }
`

export const CanvasWrap = styled.div`
    position: relative;
    width: 100%;
    /* Garantir altura no mobile (evita 0px) */
    aspect-ratio: 16 / 12;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(14, 165, 166, 0.18), inset 0 0 0 1px rgba(226, 232, 240, 0.06);

    @supports not (aspect-ratio: 1 / 1) {
        /* fallback (iOS muito antigo) */
        height: clamp(260px, 45vh, 420px);
    }

    @media (min-width: 861px) {
        aspect-ratio: 16 / 11;
    }
`

export const Content = styled.div`
    order: 1; /* mobile: texto em cima */
    text-align: center;

    @media (min-width: 861px) {
        order: 2;
        text-align: left;
    }
`

export const Code = styled.div`
    font-size: clamp(56px, 16vw, 110px);
    font-weight: 800;
    letter-spacing: -2px;
    color: #0ea5a6;
    text-shadow: 0 6px 24px rgba(14, 165, 166, 0.35);
    line-height: 0.9;
`

export const Title = styled.h1`
    margin: 10px 0 6px;
    font-size: clamp(20px, 5.5vw, 34px);
    font-weight: 700;
    color: #e5e7eb;
`

export const Subtitle = styled.p`
    margin: 6px auto 22px;
    font-size: clamp(14px, 4vw, 16px);
    line-height: 1.6;
    color: #cbd5e1;
    max-width: 560px;
`

export const Actions = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 861px) {
        justify-content: flex-start;
    }
`

export const PrimaryButton = styled.button`
    appearance: none;
    border: 0;
    padding: 12px 18px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0ea5a6 0%, #0b7285 100%);
    color: #0b1220;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(14, 165, 166, 0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 28px rgba(14, 165, 166, 0.45);
        filter: brightness(1.04);
    }

    &:active {
        transform: translateY(0);
    }
`

export const SecondaryLink = styled.a`
    padding: 11px 16px;
    border-radius: 12px;
    border: 1px solid rgba(226, 232, 240, 0.2);
    color: #e2e8f0;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

    &:hover {
        background: rgba(226, 232, 240, 0.06);
        color: #ffffff;
        border-color: rgba(226, 232, 240, 0.35);
    }
`
