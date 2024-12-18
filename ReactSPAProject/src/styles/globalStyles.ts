import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    body {
      backgorund-color:#f4f4f4;
      color:#333;
    }
    img {
      max-width: 100%;
      height:auto;
    }
`;
