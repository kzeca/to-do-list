import styles from './Header.module.css'
import logoHeader from '../assets/header-logo.svg';

export function Header() {
    return (
        <div className={styles.container}>
            <img src={logoHeader} />
        </div>
    )
}