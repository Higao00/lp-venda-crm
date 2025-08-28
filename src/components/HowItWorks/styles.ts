import styled from "styled-components"

export const SectionWrapper = styled.section`
    position: relative;
    width: 100%;
    min-height: 480px;
    overflow: hidden;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px 80px;

    @media (max-width: 768px) {
        width: auto;
        min-height: 380px;
        padding: 30px;
    }
`

export const BackgroundImageWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: -2;
`

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
`

export const ContentWrapper = styled.div`
    position: relative;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    z-index: 10;

    .mobile {
        display: block;
    }

    .desktop {
        display: none;
    }

    h2 {
        font-size: 2.2rem;
        margin-bottom: 48px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.03em;
    }

    @media (min-width: 768px) {
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
`

export const StepsGrid = styled.div`
    display: none;

    &.desktop {
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto;
            gap: 32px;
            justify-content: center;
            width: 100%;
            max-width: 1280px;
            margin: 20px auto 0;
            position: relative;
            z-index: 10;
        }
    }
`

export const StepsGridFirstRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

export const StepsFlexSecondRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
    width: 100%;
    max-width: 1280px;
`

export const StepsCarousel = styled.div``

export const StepCard = styled.div`
    background: #ffffff;
    border-radius: 16px;
    padding: 32px 24px;
    box-shadow: 0 6px 18px rgb(0 0 0 / 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 130px;
    color: #222f3e;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;

    &:hover,
    &:focus-within {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgb(0 0 0 / 0.18);
    }

    h3 {
        margin-top: 16px;
        font-size: 1.25rem;
        font-weight: 700;
        color: #0a3d62;
        line-height: 1.3;
    }
`

export const StepBadge = styled.div`
    background: linear-gradient(135deg, ${(props) => props.theme.colors.greenHover}, ${(props) => props.theme.colors.green});
    color: white;
    font-weight: 700;
    font-size: 1rem;
    padding: 8px 20px;
    border-radius: 24px;
    margin-bottom: 16px;
    user-select: none;
    letter-spacing: 0.04em;
`
