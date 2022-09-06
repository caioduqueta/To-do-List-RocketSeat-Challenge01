import { Container } from "./styles"
import ClipboardSvg from "../../assets/Clipboard.svg"


export function NoTasks(){
  return(
    <Container>
      <img src={ClipboardSvg} alt="Clipboard icon"/>
      <p className="bold">Você ainda não tem tarefas cadastradas</p>
      <p className="regular">Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}