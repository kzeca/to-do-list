import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
    return (
        <div className={styles.container}>
            <label>
                <input type="checkbox" />
                <span className={styles.checkbox} />
                Teste Aleatória da vida de uma task
                aleatória qualquer rsrsrsrs quebra de linha
                já deu? Eu me pergunto indeed! 🗿🍷
            </label>
            <button title='Delete task'>
                <Trash size={24}/>
            </button>
        </div>
    )
}