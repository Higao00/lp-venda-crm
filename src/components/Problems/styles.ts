import styled from "styled-components"

export const Problems = styled.section`
    padding: 50px 20px;
    text-align: center;
    background: linear-gradient(180deg, ${props => props.theme.colors.lightGray} 0%, ${props => props.theme.colors.white} 100%);

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 1.6rem;
        }

        @media (max-width: 480px) {
            font-size: 1.4rem;
        }
    }

    p {
        margin: 10px 0 30px;
        font-size: 1.1rem;
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.95rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        max-width: 480px;
        margin: 0 auto;

        li {
            margin: 10px 0;
            font-size: 1.05rem;
            line-height: 1.4;

            @media (max-width: 768px) {
                font-size: 1rem;
            }

            @media (max-width: 480px) {
                font-size: 0.9rem;
            }
        }
    }
`
