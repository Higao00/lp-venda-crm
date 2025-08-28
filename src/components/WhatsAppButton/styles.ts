import styled from "styled-components"

export const Button = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    padding: 14px;
    border-radius: 50%;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        bottom: 16px;
        right: 16px;
        padding: 12px;
    }
`
