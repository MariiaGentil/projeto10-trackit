import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: var(--primary-font);
        --primary-font: "Lexend Deca", sans-serif;
        --secundary-font: "Playball", sans-serif;
        --blue-dark: #126BA5;
        --blue-ligth: #52B6FF;
        --grey-dark: #666666;
        --grey-ligth: #DBDBDB;
        --white: #FFFFFF;
        --green: #8FC549;
        --red: #EA5766;
        --background: #F2F2F2;
        --transparent: transparent;
    }
    
    .root {
        height: 100vh;
        width: 100%;
    }

    body {
        height: 100vh;
        width: 100%;
    }
`;
 
export default GlobalStyle;