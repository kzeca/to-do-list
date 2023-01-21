import { PlusCircle } from 'phosphor-react';
import styles from './CreateButton.module.css';

interface CreateButtonProps {
    disabled: boolean;
}

export function CreateButton(props: CreateButtonProps) {
    const { disabled } = props;
    return (
        <button 
            disabled={disabled} 
            type='submit' 
            className={styles.createButton}
        >
            Criar
            <PlusCircle size={16}/>
        </button>
    )
}