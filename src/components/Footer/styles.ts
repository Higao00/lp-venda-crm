import styled from "styled-components"

export const Footer = styled.footer`
    background-color: #01395c;
    color: #ffffff;
    padding: 40px 20px 20px;

    .content {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        text-align: center;

        @media (min-width: 768px) {
            text-align: center;
        }
    }

    .info {
        font-size: 0.95rem;
        line-height: 1.6;

        h4 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        p {
            margin: 4px 0;
        }
    }

    .social {
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-top: 16px;

        a {
            font-size: 2.2rem;
            transition: transform 0.3s ease;
        }

        .whatsapp {
            color: #25d366;
        }

        .instagram {
            color: #e1306c;
        }

        a:hover {
            transform: scale(1.1);
        }
    }

    .copy {
        text-align: center;
        font-size: 0.8rem;
        color: #aaa;
        margin-top: 30px;
    }
`
