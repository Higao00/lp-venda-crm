import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400; /* Regular como padrão */
    overflow-x: hidden; 
    
    ::-webkit-scrollbar {
      display: none;
    }
    
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-weight: ${({ theme }) => theme.fonts.regular};
  }

  .light {
    font-weight: ${({ theme }) => theme.fonts.light};
  }

  .medium {
    font-weight: ${({ theme }) => theme.fonts.medium};
  }

  .bold {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  
  img{
      max-width: 100% !important;
  }

  a{
      text-decoration: none;
  }
  
  .no-scroll {
      overflow: hidden;
  }
  
  .swiper-pagination {
    margin-top: 20px !important;
    position: static !important;;
  }
  
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.greenHover} !important;;
    opacity: 0.6 !important;;
    padding: 1px !important;;
  }

  .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.green} !important;;
      opacity: 1 !important;;
  }
`

export default GlobalStyle
