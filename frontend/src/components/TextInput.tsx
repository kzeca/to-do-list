import styles from './TextInput.module.css';

export function TextInput() {
    return (
        <input 
            className={styles.textInput}
            type="text" 
            placeholder="Adicione uma nova tarefa"
        />
    )
}