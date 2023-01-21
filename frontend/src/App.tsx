import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './App.module.css';
import { Counter } from './components/Counter';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import './global.css';
import clipboardImg from './assets/clipboard.svg';
import { Task } from './components/Task';
import { ITask } from './interfaces/ITask';
import { arrayMoveImmutable } from 'array-move';
import nextId from 'react-id-generator';


export function App() {

  const [tasks, setTasks]  = useState<ITask[]>([]);
  const totalTasks = tasks.length;
  const [newTask, setNewTask] = useState('');
  const hasTask = tasks?.length !== 0;
  const isInputEmpty = newTask.length === 0;
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const totalTasksCompleted = completedTasks.length;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if(toggle) {
      const taskOrder = arrayMoveImmutable(tasks, tasks.length-1, 0);
      setTasks(taskOrder);
      setToggle(false);
    }
  }, [toggle]);


  function handleCreateNewTask(event: FormEvent): void {
    event.preventDefault();
    setTasks([ ...tasks, 
    {
      content: newTask,
      id: +nextId().replace("id", "")
    }])
    setNewTask('');
    setToggle(true);
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(taskId: number): void {
    const newTasksList = tasks.filter(task => task.id !== taskId);
    const newCompleted = completedTasks.filter(id => id !== taskId);
    setTasks(newTasksList);
    setCompletedTasks(newCompleted);
  }

  function handleCheckedTask(taskId: number, isChecked: boolean): void {
    const getAllIds = tasks.map( task => task.id);
    const indexOfElement = getAllIds.lastIndexOf(taskId);
    if(isChecked){
      setCompletedTasks([ ...completedTasks, taskId]);
      const newList = arrayMoveImmutable(tasks, indexOfElement, tasks.length-1);
      setTasks(newList);
    }
    else {
      const newCompleted = completedTasks.filter(id => id !== taskId);
      setCompletedTasks(newCompleted);
      const newList = arrayMoveImmutable(tasks, indexOfElement, 0);
      setTasks(newList);
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <form onSubmit={handleCreateNewTask}>
          <input 
            className={styles.textInput}
            value={newTask}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTask}
          />
            <CreateButton disabled={isInputEmpty}/>
          </form>
          <div className={styles.tasksContainer}>
            <header>
              <Counter 
                text="Tarefas criadas" 
                counter={totalTasks.toString()} 
                strongColor='blue' 
              />
              <Counter text="Concluidas" counter={`${totalTasksCompleted} de ${totalTasks}`} strongColor='purple'/>
            </header>
            <main>
              {!hasTask ? (
                <div className={styles.noTask}>
                  <img src={clipboardImg}  />
                  <span><strong>Você ainda não tem tarefas cadastradas</strong> <br />
                  Crie tarefas e organize seus itens a fazer</span>
                </div>
              ): (
                <div className={styles.hasTask}>
                  {tasks?.map((task: ITask) => {
                    return (
                      <Task 
                        key={task.id}
                        id={task.id} 
                        text={task.content} 
                        onDelete={handleDeleteTask}
                        onChecked={handleCheckedTask}
                      />
                    )
                  })}
                </div>
              ) }
            </main>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
