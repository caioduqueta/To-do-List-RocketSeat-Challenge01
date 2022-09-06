import styled from "styled-components";

export const Container = styled.header`
width:100%;
max-width: 100vw;
height: 12.5rem;
background: var(--gray-700);
display: flex;
justify-content: center;
align-items: center;

img{
  padding-right: 0.75rem;
}

span.to-logo{
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--blue);
}
span.do-logo{
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--purple);
}
`