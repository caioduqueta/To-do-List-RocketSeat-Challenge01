import styled from "styled-components";

export const Container = styled.div`
width:100%;
max-width: 46rem;
margin-top: 1.5rem;

display: flex;
justify-content: center;
align-items: center;
grid-template-areas: "input" "p" "trash";
grid-template-columns: 3.25rem 39.5rem 3.25rem;


div.tasks{
width:100%;
max-width: 46rem;
height: 4.5rem;

background: var(--gray-500);
border: 2px solid var(--gray-400);
border-radius: 10px;

display: flex;
align-items: center;
justify-content: space-between;


}

input[type=checkbox]{
appearance: none;
-webkit-appearance: none;
height: 1.25rem;
width: 1.25rem;

border-radius: 50%;
background: transparent;
margin-left: 1rem;

margin-right: 1rem;
border: 2px solid var(--blue);

position: relative;

&:checked::before{
position: absolute;
content: "";

height: 0.5rem;
width: 0.35rem;
border-right: 2px solid var(--gray-100);
border-bottom:2px solid var(--gray-100);

top: 0.225rem;
left: 0.3625rem;
right:0;
bottom: 0;
z-index: 10;

transform: rotate(45deg);
opacity: 1;
}

&:hover{
  border: 2px solid var(--blue-dark);
}

&:checked {
  background: var(--purple-dark);
  border: 2px solid var(--purple-dark);
  border:none;
}

&:checked:hover{
  background: var(--purple);
  border: 2px solid var(--purple);
  border:none;
}

&:checked ~ p{
  text-decoration: line-through;
  color: var(--gray-300);
}
}
p{
  width:39.5rem;
  font-family:'Inter', sans-serif;
  font-size: 0.875rem;
  line-height: 140%;
  color: var(--gray-100)
}

`
export const TrashIcon= styled.button`
margin-left: 1rem;
margin-right: 1rem;
color: var(--gray-300);
padding: 0.15rem;
background: transparent;
border: none;
transition: all 0.2s;
:hover{
  background: var(--gray-400);
  color: var(--danger)
}
`