import styled from 'styled-components';

export const FAQ = styled.section`
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;

    .faq-header {
        text-align: center;
        margin-bottom: 50px;

        h2 {
            font-size: 2.5rem;
            color: ${({ theme }) => theme.colors.blue};
            margin-bottom: 16px;
        }

        p {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.8;
        }
    }

    .faq-items {
        max-width: 800px;
        margin: 0 auto;
    }

    .faq-item {
        background: ${({ theme }) => theme.colors.white};
        border-radius: 8px;
        margin-bottom: 16px;
        box-shadow: 0 2px 4px rgba(0, 60, 97, 0.08);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid ${({ theme }) => theme.colors.blue}10;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .question {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-size: 1.1rem;
                color: ${({ theme }) => theme.colors.black};
                margin: 0;
            }

            .icon {
                font-size: 1.5rem;
                color: ${({ theme }) => theme.colors.blue};
                transition: transform 0.3s ease;
            }
        }

        .answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0 20px;

            p {
                margin: 0;
                padding-bottom: 20px;
                color: ${({ theme }) => theme.colors.black};
                opacity: 0.8;
                line-height: 1.6;
            }
        }

        &.open {
            .icon {
                transform: rotate(180deg);
            }

            .answer {
                max-height: 500px;
            }
        }
    }

    .faq-cta {
        text-align: center;
        margin-top: 40px;
        padding: 20px;
        background: linear-gradient(180deg, ${({ theme }) => theme.colors.white} 0%, ${({ theme }) => theme.colors.lightGray} 100%);
        border: 1px solid ${({ theme }) => theme.colors.blue}10;
        border-radius: 8px;

        p {
            margin-bottom: 16px;
            font-size: 1.1rem;
        }

        .whatsapp-button {
            background: #25D366;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(37, 211, 102, 0.3);
            }
        }
    }
`;
