import styled from "styled-components";

export const Container = styled.div`
width:100%;
max-width: 46rem;

margin-top: 1.5rem;
padding-top: 4rem;
border-top: 2px solid var(--gray-400);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{padding-bottom: 1rem;}

p.bold{
font-family: 'Inter', sans-serif;
font-size: 1rem;
font-weight: bold;
color: var(--gray-300);
line-height:140%;
}

p.regular{
font-family: 'Inter', sans-serif;
font-size: 1rem;
line-height:140%;
color: var(--gray-300);
}
`

