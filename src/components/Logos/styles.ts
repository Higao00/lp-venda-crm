// styles.ts
import styled from "styled-components"

export const ProjectsSection = styled.section`
    padding: 40px 20px;
    text-align: center;
    background: #f9f9f9;

    h2 {
        font-size: 2.2rem;
        margin-bottom: 40px;
        color: #222;

        @media (max-width: 480px) {
            font-size: 1.6rem;
            margin-bottom: 30px;
        }
    }
`

export const Carousel = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    padding: 0 60px;

    @media (max-width: 1024px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 20px;
    }
    @media (max-width: 480px) {
        padding: 0 10px;
    }

    .nav-buttons {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        transform: translateY(-50%);
        pointer-events: none;

        button {
            background: #fff;
            border: 1px solid #e5e7eb;
            color: ${({ theme }) => theme.colors.green};
            width: 48px;
            height: 48px;
            border-radius: 999px;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
            pointer-events: all;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;

            &:hover,
            &:focus-visible {
                color: ${({ theme }) => theme.colors.greenHover};
                transform: scale(1.06);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                outline: none;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const ProjectCard = styled.div`
    background: #fff;
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: default;
    height: 100%;
    min-height: 460px;
    overflow: hidden;

    &:hover,
    &:focus-within {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }

    figure {
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    img {
        width: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

    figcaption {
        padding: 16px 16px 20px;
        text-align: left;
    }

    .title {
        font-size: 1.05rem;
        color: #111;
        margin-bottom: 6px;

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    .subtitle {
        font-size: 0.95rem;
        color: #555;
        line-height: 1.5;

        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        min-height: 510px;
    }
`
