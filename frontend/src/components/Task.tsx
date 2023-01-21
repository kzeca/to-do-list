import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: number;
    text: string;
    onDelete: (id: number) => void;
}

export function Task(props: TaskProps) {
    const { text, onDelete, id } = props;

    function handleDeleteTask() {
        onDelete(id);
    }

    return (
        <div className={styles.container}>
            <label>
                <input type="checkbox" />
                <span className={styles.checkbox} />
                <span>{text}</span>
            </label>
            <button onClick={handleDeleteTask} title='Delete task'>
                <Trash size={24}/>
            </button>
        </div>
    )
}