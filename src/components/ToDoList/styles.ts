import styled from "styled-components";

export const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

div.input-button{
display: flex;
justify-content: center;
align-items: center;
}

input[type=text]{
  margin-top: -1.5rem;
  width: 39.75rem;
  height: 3.375rem;
  margin-right: 0.5rem;
  padding-left: 1rem;

  background: var(--gray-500);
  color: var(--gray-100);

  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 140%;
  word-break: break-all;

  border: 1px solid var(--gray-700);
  border-radius: 5px;
  transition: all 0.2s;
  

&:hover{
  filter: brightness(120%);
}

:focus { outline: none;
  border: 1px solid var(--purple-dark);
}
}

button.criar {
display: flex;
justify-content: center;
align-items: center;

margin-top: -1.5rem;
width: 5.625rem;
height: 3.375rem;

background-color: var(--blue-dark);
color: var(--gray-100);

font-family: 'Inter', sans-serif;
font-size: 1rem;
line-height: 140%;

border: none;
border-radius: 5px;

&:hover{
  background-color: var(--blue);
  transition: all 0.2s;
}

span{
  padding-right: 0.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}
}
`
export const TaskList = styled.div`
width:100%;
max-width: 46rem;
margin-top: 4rem;

display: flex;
justify-content: space-between;

font-family: 'Inter', sans-serif;
font-size: 1rem;

span.title-tarefa{
color: var(--blue);
font-weight: bold;
padding-right: 0.75rem;
}
span.title-concluído{
color: var(--purple);
font-weight: bold;
padding-right: 0.75rem;
}
span.number{
color: var(--gray-200);
background: var(--gray-400);
padding: 0.125rem 0.5rem 0.125rem 0.5rem;

font-weight: regular;

border-radius: 10px
}
`