import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PromoBar = styled(motion.div)`
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 12px 20px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .timer {
        display: flex;
        gap: 8px;
        font-weight: bold;
        
        .time-block {
            background: rgba(255, 255, 255, 0.2);
            padding: 4px 8px;
            border-radius: 4px;
            min-width: 40px;
            text-align: center;
        }
    }

    .message {
        font-size: 1rem;
        
        strong {
            color: ${({ theme }) => theme.colors.greenHover};
        }
    }

    button {
        background: ${({ theme }) => theme.colors.green};
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background: ${({ theme }) => theme.colors.greenHover};
            transform: translateY(-2px);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 16px;
        position: relative;
        
        .timer {
            margin: 8px 0;
        }
    }
`;
