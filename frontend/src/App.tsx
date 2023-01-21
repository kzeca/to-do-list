import { FormEvent, useState } from 'react';
import styles from './App.module.css';
import { Counter } from './components/Counter';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import './global.css';
import clipboardImg from './assets/clipboard.svg';
import { Task } from './components/Task';


export function App() {

  const tasks = [];

  function handleCreateNewTask(event: FormEvent): void {
    event.preventDefault();
  }

  const [hasTask, setHasTask] = useState<boolean>(true);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <form onSubmit={handleCreateNewTask}>
            <TextInput />
            <CreateButton />
          </form>
          <div className={styles.tasksContainer}>
            <header>
              <Counter text="Tarefas criadas" counter="0" strongColor='blue' />
              <Counter text="Concluidas" counter="0" strongColor='purple'/>
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
                  <Task />
                  <Task />
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
