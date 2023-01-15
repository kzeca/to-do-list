import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import './global.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <div className={styles.addTask}>
            <TextInput />
            <CreateButton />
          </div>
          
        </main>
      </div>
    </div>
  )
}

export default App
