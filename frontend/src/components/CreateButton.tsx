import { PlusCircle } from 'phosphor-react';
import styles from './CreateButton.module.css';

export function CreateButton() {
    return (
        <button className={styles.createButton}>
            Criar
            <PlusCircle size={16}/>
        </button>
    )
}