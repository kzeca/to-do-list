import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: number;
    text: string;
    onDelete: (id: number) => void;
    onChecked: (id: number, isChecked: boolean) => void;
}

export function Task(props: TaskProps) {
    const { id, text, onDelete, onChecked } = props;

    function handleDeleteTask() {
        onDelete(id);
    }

    function handleTaskChecked(event: any) {
        onChecked(id, event?.target.checked);
    }

    return (
        <div className={styles.container}>
            <label>
                <input onChange={handleTaskChecked} type="checkbox" />
                <span className={styles.checkbox} />
                <span>{text}</span>
            </label>
            <button onClick={handleDeleteTask} title='Delete task'>
                <Trash size={24}/>
            </button>
        </div>
    )
}