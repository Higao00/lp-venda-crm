import styled from "styled-components"
import { motion } from "framer-motion"

export const PromoBar = styled(motion.div)`
    position: sticky; /* antes era fixed */
    top: 0;
    z-index: 1000;
    width: 100%;

    padding-top: calc(env(safe-area-inset-top, 0px));
    backdrop-filter: saturate(140%) blur(6px);

    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`

export const Inner = styled.div`
    /* container interno para organizar conteúdo */
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    max-width: 1200px;
    margin: 0 auto;

    .message {
        font-size: 0.95rem;
        line-height: 1.2;
        strong {
            color: ${({ theme }) => theme.colors.greenHover};
        }
    }

    .timer {
        display: grid;
        grid-auto-flow: column;
        gap: 8px;

        .time-block {
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 8px;
            min-width: 50px;
            text-align: center;
            padding: 4px 6px;

            .value {
                display: block;
                font-weight: 800;
                font-variant-numeric: tabular-nums;
                letter-spacing: 0.5px;
                font-size: 0.95rem;
                line-height: 1.1;
            }
            .label {
                display: block;
                font-size: 0.7rem;
                opacity: 0.9;
                margin-top: 2px;
            }
        }
    }

    .cta {
        background: ${({ theme }) => theme.colors.green};
        color: white;
        border: none;
        padding: 8px 14px;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.25s ease, background 0.25s ease;
        white-space: nowrap;
        font-weight: 700;

        &:hover {
            background: ${({ theme }) => theme.colors.greenHover};
            transform: translateY(-2px);
        }
    }

    .close {
        appearance: none;
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
        line-height: 1;
        padding: 6px 8px;
        margin-left: -6px;
        cursor: pointer;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }

    /* ——— Mobile ——— */
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* empilha */
        gap: 10px;
        padding: 10px 12px;

        .message {
            text-align: center;
            font-size: 0.9rem;
        }

        .timer {
            /* grid 4 colunas para os dígitos, centralizado */
            justify-content: center;
            grid-auto-flow: column;
            gap: 6px;

            .time-block {
                min-width: 44px;
                padding: 4px 4px;

                .value {
                    font-size: 0.9rem;
                }
                .label {
                    font-size: 0.65rem;
                }
            }
        }

        .cta {
            width: 100%; /* botão cheio no mobile */
            padding: 10px 14px;
        }

        .close {
            position: absolute;
            top: calc(env(safe-area-inset-top, 0px) + 6px);
            right: 6px;
            font-size: 24px;
            padding: 6px;
        }
    }
`
