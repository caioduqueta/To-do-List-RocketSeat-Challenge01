import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root{

--gray-100: #f2f2f2;
--gray-200: #d9d9d9;
--gray-300: #808080;
--gray-400: #333333;
--gray-500: #262626;
--gray-600: #1a1a1a;
--gray-700: #0d0d0d;

--danger: #e25858;

--blue: #4ea8de;
--blue-dark: #1e6f9f;

--purple: #8284fa;
--purple-dark: #5e60ce;

}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  width: 100%;
  max-width: 100vw; 
  background: var(--gray-600);
}

::placeholder {
  color: var(--gray-300);
}
`