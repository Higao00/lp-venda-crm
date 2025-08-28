import styled from "styled-components"

export const SectionWrapper = styled.section`
    padding: 70px 20px;
    max-width: 1280px;
    margin: 0 auto;
    color: #333;

    button {
        background: linear-gradient(135deg, ${(props) => props.theme.colors.greenHover}, ${(props) => props.theme.colors.green});
        color: #fff;
        font-weight: 600;
        padding: 16px 50px;
        font-size: 1rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;

        margin-top: 3rem;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }
    }

    @media (max-width: 768px) {
        button {
            padding: 16px 32px;
            margin-top: 0;
            width: 100%;
        }
    }
`

export const AboutSection = styled.div`
    margin-bottom: 60px;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 40px;
        color: #1a1a1a;
    }

    .about-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }

    .about-card {
        background: #f8f9fa;
        padding: 24px 20px;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.05);
        text-align: left;

        h3 {
            font-size: 1.5rem;
            margin-bottom: 16px;
            color: #2c3e50;
        }

        p {
            font-size: 1rem;
            line-height: 1.5;
            color: #555;
        }
    }
`

export const WhatWeDoSection = styled.div`
    text-align: center;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 40px;
        color: #1a1a1a;
    }
`

export const WhatWeDoGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 40px;

    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;

        &.center {
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
        }
    }

    &.desktop {
        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const WhatWeDoCarousel = styled.div`
    display: none;
    margin-bottom: 40px;

    &.mobile {
        @media (max-width: 768px) {
            display: block;
        }
    }
`

export const Card = styled.div`
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    text-align: center;

    h3 {
        margin-top: 12px;
        font-size: 1.3rem;
        color: #34495e;
    }

    p {
        margin-top: 8px;
        font-size: 1rem;
        color: #666;
        line-height: 1.4;
        flex-grow: 1;
    }

    @media (max-width: 768px) {
        margin: 1rem;
        min-height: 290px;
    }
`
