import styles from './loading.module.css';

function Loading() {
    return <div className = {styles.all}>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
    </div>;
}

export default Loading;