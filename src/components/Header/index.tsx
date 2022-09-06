import { Container } from "./styles";
import LogoImg from "../../assets/Logo.svg";


export function Header(){
  return(
    <Container>
      <img src={LogoImg} alt="Logo"/>
      <span className="to-logo">to</span>
      <span className="do-logo">do</span>
    </Container>

  )
}