import { createGlobalStyle } from 'styled-components';

export interface DefaultTheme {
    width: {
        xxl: number;
    };
    height: {
        xxl: number;
    };
    colors: {
        secondary: string;
    };
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all .3s ease;
    scroll-behavior: smooth;

  }
  #root {
    overflow: clip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;
