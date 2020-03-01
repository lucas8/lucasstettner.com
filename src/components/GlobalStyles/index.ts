import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1;
    background: linear-gradient(180deg, #16161A 0%, #0D1D27 35%, #241E22 70%, #16161A 100%);
    background-color: #16161A;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
    -webkit-text-size-adjust: none;

    @media (max-width: 968px) {
      font-size: 16px;
    }
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #___gatsby {
      height: 100%;
  }
`
