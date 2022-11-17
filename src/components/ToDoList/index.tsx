import { Container, TaskList } from "./styles";
import {PlusCircle} from "phosphor-react"
import { NoTasks } from "../NoTasks";
import { AllTasks } from "../AllTasks";
import { FormEvent, useState } from "react";

export function ToDoList(){
const [newTask, setNewTask] = useState("");
const [tasks, setTasks] = useState<string[]>([]);
const [taskNumber, setTaskNumber] = useState(0);

function handleChangeNewTask(event: React.ChangeEvent<HTMLInputElement>){
  setNewTask(event.target.value)
}
function handleCreateNewTask(event: FormEvent){
  event.preventDefault();
  setTasks([...tasks, newTask]);
  setNewTask('');
}

function deleteTask(taskToDelete: string){

  const tasksWithoutDeletedOne = tasks.filter(task =>{ // só manter as tasks diferentes do que eu quero deletar
    return task !== taskToDelete;
  })

  setTasks(tasksWithoutDeletedOne);
  setTaskNumber(taskNumber -1)
}

function showTasks(){
return(
tasks.map(task=>{
  return(<AllTasks
  key={task}
  content={task}
  onDeleteTask={deleteTask}
  onMadeTask={madeTask}
  onNotMadeTask={notMadeTask}
  />
     )
}))}

function madeTask(){
  setTaskNumber(taskNumber + 1)
}
function notMadeTask(){
  setTaskNumber(taskNumber - 1)
}

  return(
    <Container onSubmit={handleCreateNewTask}>
      <div className="input-button">
        <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeNewTask}
        value={newTask}
        required
        />
          <button
          className="criar"
           type="submit"
           >
            <span>Criar</span>
            <PlusCircle size={24} weight="regular" />
          </button>
      </div>
      <TaskList>
        <div className="tasks">
          <span className="title-tarefa">Tarefas Criadas</span>
          <span className="number">{tasks.length}</span>
        </div>
        <div className="tasks">
          <span className="title-concluído">Concluídas</span>
          <span className="number">{taskNumber} de {tasks.length}</span>
        </div>
      </TaskList>
      
{tasks.length > 0  ? showTasks() : <NoTasks />} {/*Array pode pensar em tamanho*/}

     
    </Container>

  )
}