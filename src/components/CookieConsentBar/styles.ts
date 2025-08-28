import styled from "styled-components"

export const Bar = styled.div`
    position: fixed;
    left: 16px;
    right: 16px;
    bottom: 16px;
    z-index: 9999999;
    background: rgba(11, 18, 32, 0.9);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(226, 232, 240, 0.12);
    border-radius: 14px;
    padding: 14px;
    color: #e5e7eb;
    box-shadow: 0 12px 40px rgba(14, 165, 166, 0.2);

    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        left: 12px;
        right: 12px;
        bottom: 12px;
        border-radius: 12px;
    }
`

export const TextWrap = styled.div`
    min-width: 0;
`

export const Title = styled.div`
    font-weight: 700;
    margin-bottom: 4px;
    color: #ffffff;
`

export const Text = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: #cbd5e1;

    a {
        color: #0ea5a6;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-self: end;

    @media (max-width: 640px) {
        justify-self: stretch;
        justify-content: flex-end;
    }
`

const BtnBase = styled.button`
    appearance: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 14px;
    font-weight: 700;
    font-size: 14px;
    border: 1px solid transparent;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    &:active {
        transform: translateY(0);
    }
`

export const Primary = styled(BtnBase)`
    background: linear-gradient(135deg, #0ea5a6 0%, #0b7285 100%);
    color: #0b1220;
    box-shadow: 0 8px 24px rgba(14, 165, 166, 0.35);
    &:hover {
        filter: brightness(1.04);
        box-shadow: 0 10px 28px rgba(14, 165, 166, 0.45);
        transform: translateY(-1px);
    }
`

export const Secondary = styled(BtnBase)`
    background: rgba(226, 232, 240, 0.06);
    color: #e2e8f0;
    border-color: rgba(226, 232, 240, 0.2);
    &:hover {
        background: rgba(226, 232, 240, 0.1);
    }
`
