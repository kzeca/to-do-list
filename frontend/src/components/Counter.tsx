import styles from './Counter.module.css';

interface CounterProps {
    text: string;
    counter: string;
    strongColor: string;
}

export function Counter(props: CounterProps) {
    const { text , counter , strongColor } = props;
    return (
        <div className={styles.container}>
            <strong style={{"color": `var(--${strongColor})`}}>
                {text} 
            </strong>
            <span>
                {counter}
            </span>
        </div>
        
    )
}