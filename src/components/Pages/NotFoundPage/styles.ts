// Styled components
import styled, { keyframes } from "styled-components"


// Container da página com fundo gradiente utilizando as cores do tema
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #003C61, #159781, #01395C, #FAFAFA);  // Gradiente utilizando as cores do tema
  margin: 0;
  overflow: hidden;  // Impede que o conteúdo ultrapasse a tela
`;

// Container do cubo com tamanho controlado
export const CubeContainer = styled.div`
  canvas {
    width: 100% !important;
    height: 80vh !important;
  }
`;

export const ContainerText = styled.div`
    margin-top: -5rem;
`

// Texto da página de 404
export const Message = styled.h1`
  color: #fff;  // Texto branco para contrastar com o fundo
  font-size: 2rem;
  text-align: center;
  margin: 0;
`;

export const RedirectMessage = styled.p`
  color: #fff;  // Texto branco para contrastar com o fundo
  font-size: 1rem;
  text-align: center;
  margin: 0;
  margin-top: 1rem;
`;