import styled from "styled-components"

export const Section = styled.section`
    background: #fff;
    padding: 80px 20px;

    @media (max-width: 768px) {
        padding: 20px 16px;
    }
`

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 50px;
    align-items: center;

    @media (max-width: 1024px) {
        gap: 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 50px;
    }
`

export const VideoCol = styled.div`
    .video-wrapper {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
        background: #000;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        display: block;
    }
`

export const TextCol = styled.div`
    h2 {
        font-size: 2.2rem;
        line-height: 1.2;
        margin: 0 0 20px;
        color: #111;

        @media (max-width: 480px) {
            font-size: 1.6rem;
        }
    }

    p {
        font-size: 1.1rem;
        color: #333;
        margin: 0 0 20px;
        line-height: 1.6;
    }

    ul {
        margin: 0 0 30px;
        padding-left: 20px;
        color: #444;
        text-align: left;

        @media (max-width: 768px) {
            text-align: center;
            padding-left: 0;
            list-style-position: inside;
        }

        li {
            margin-bottom: 10px;
            font-size: 1rem;
        }
    }
`

export const CTA = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    background: ${({ theme }) => theme.colors.green};
    color: #fff;
    font-size: 1rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

    &:hover,
    &:focus-visible {
        background: ${({ theme }) => theme.colors.greenHover};
        transform: translateY(-1px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
        outline: none;
    }
`

export const SmallNote = styled.p`
    margin-top: 12px;
    font-size: 0.9rem;
    color: #666;
`
