import styled from "styled-components"

export const FinalCTA = styled.section`
    padding: 60px 20px;
    text-align: center;

    background: linear-gradient(180deg, ${(props) => props.theme.colors.white} 0%, ${(props) => props.theme.colors.lightGray} 100%);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${(props) => props.theme.colors.blue}30, transparent);
    }

    form {
        position: relative;
        max-width: 600px;
        margin: 20px auto 0;
        display: grid;
        gap: 15px;

        div {
            position: relative;

            input,
            select,
            option {
                width: 100%;
                max-width: 100%; /* garante que não ultrapasse o container */
                box-sizing: border-box; /* considera padding e border na largura */
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 8px;
                background-color: #fff;
                font-size: 1rem;
                color: #424242;

                &:focus {
                    border-color: #4caf50;
                    outline: none;
                }
            }

            select {
                appearance: none;
                background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
                background-repeat: no-repeat;
                background-position: right 1rem center;
                background-size: 0.8rem;
                padding-right: 2.5rem;

                &:invalid {
                    color: #424242;
                }

            }

            span {
                position: absolute;
                top: 50%;
                right: 12px;
                transform: translateY(-50%);
                color: ${(props) => props.theme.colors.orange};
                font-size: 0.75rem;
                pointer-events: none;
                white-space: nowrap;
                background: ${(props) => props.theme.colors.white};
                padding: 0 4px;

                @media (max-width: 480px) {
                    /* Se o erro for muito longo, diminui o tamanho do texto */
                    font-size: 0.65rem;
                    right: 6px;
                }
            }
        }

        button {
            background: linear-gradient(135deg, ${(props) => props.theme.colors.greenHover}, ${(props) => props.theme.colors.green});
            color: #fff;
            font-weight: 600;
            padding: 16px 32px;
            font-size: 1rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;

            &:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
            }
        }

        @media (max-width: 600px) {
            max-width: 100%;
            padding: 0 10px; /* dar um padding lateral para não grudar na borda */
        }
    }
`
