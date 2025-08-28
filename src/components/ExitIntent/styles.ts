import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    padding: 20px;
`;

export const Modal = styled(motion.div)`
    background: white;
    border-radius: 12px;
    padding: 32px;
    max-width: 500px;
    width: 100%;
    position: relative;
    
    .close-button {
        position: absolute;
        top: 16px;
        right: 16px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.5;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
        }
    }

    h2 {
        color: ${({ theme }) => theme.colors.blue};
        margin: 0 0 16px;
        font-size: 1.8rem;
        text-align: center;
    }

    p {
        margin: 0 0 24px;
        text-align: center;
        color: ${({ theme }) => theme.colors.black};
        line-height: 1.6;
    }

    .offer {
        background: ${({ theme }) => theme.colors.lightGray};
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 24px;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.colors.blue}10;

        strong {
            color: ${({ theme }) => theme.colors.blue};
            font-size: 1.2rem;
            display: block;
            margin-bottom: 8px;
        }

        p {
            margin: 0;
        }
    }

    .features {
        margin: 24px 0;
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 12px;
            padding-left: 24px;
            position: relative;
            color: ${({ theme }) => theme.colors.black};

            &:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: ${({ theme }) => theme.colors.green};
            }
        }
    }

    .cta-button {
        display: block;
        width: 100%;
        padding: 16px;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.greenHover}, ${({ theme }) => theme.colors.green});
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 200, 83, 0.3);
        }
    }
`;
