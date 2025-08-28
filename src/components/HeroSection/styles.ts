import styled from "styled-components"

export const Hero = styled.section`
    position: relative;
    min-height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    color: white;
    overflow: hidden;
    min-height: 60vh;

    .bg-image {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 10, 10, 0.6);
        z-index: 1;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 60px;
        justify-content: space-between;
        align-items: center;

        position: relative;
        z-index: 2;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;

        .text {
            flex: 1 1 500px;

            h1 {
                font-size: clamp(2rem, 5vw, 3rem);
                line-height: 1.2;
                margin-bottom: 20px;
            }

            p {
                font-size: clamp(1rem, 2.5vw, 1.25rem);
                margin-bottom: 30px;
            }

            ul {
                list-style: none;
                padding: 0;
                margin-bottom: 30px;

                li {
                    font-size: 1.1rem;
                    margin: 8px 0;
                }
            }
        }
    }

    @media (max-width: 768px) {
        min-height: auto;
        padding: 10px 10px 40px 10px;

        .content {
            gap: 10px;
            flex-direction: column;

            .text {
                flex: 1 1 100%;
                text-align: center;
                max-width: 600px;
                margin: 0 auto;

                h1 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                p {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                }
            }
        }
    }
`

export const FormBox = styled.div`
    background: rgb(255 255 255 / 90%);
    padding: 24px;
    border-radius: 16px;
    color: #333;
    max-width: 380px;
    width: 100%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        div {
            position: relative;
        }

        input,
        textarea {
            width: calc(100% - 32px);
            padding: 14px 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            font-family: inherit;
            resize: none;
            transition: border-color 0.2s ease;

            &:focus {
                border-color: #4caf50;
                outline: none;
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

        button {
            width: 100%;
            background: linear-gradient(135deg, ${(props) => props.theme.colors.greenHover}, ${(props) => props.theme.colors.green});
            color: #fff;
            font-weight: 600;
            padding: 14px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
            }
        }
    }

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        padding: 20px;
    }
`
