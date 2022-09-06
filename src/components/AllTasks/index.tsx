import { Container, TrashIcon } from "./styles"
import { Trash } from "phosphor-react"

interface AllTasksProps{
content: string
onDeleteTask: (taskToDelete: string) => void;
onMadeTask: () => void;
onNotMadeTask: () => void;
}

export function AllTasks({content, onDeleteTask, onMadeTask, onNotMadeTask}: AllTasksProps){

  function handleDeleteTask(){
    onDeleteTask(content);
  }

  function handleconclusionTask(event: React.ChangeEvent<HTMLInputElement>){
    event.target.checked ? onMadeTask() : onNotMadeTask();
  }
  return(

    <Container>
    <div className="tasks">
    <input 
    type="checkbox"
    onChange={handleconclusionTask}

    />
    <p>{content}</p>
    <TrashIcon onClick={handleDeleteTask}>
    <Trash size={24} />
    </TrashIcon>
    </div>
    </Container>
     
  )
}