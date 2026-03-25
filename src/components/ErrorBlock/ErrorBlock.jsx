import React from 'react';
import styles from './ErrorBlock.module.css';

const ErrorBlock = ({ error, onRetry }) => {
    return (
        <div className={styles.errorState}>
            <div className={styles.errorIcon}>⚠️</div>
            <div className={styles.errorTitle}>Ошибка загрузки</div>
            <div className={styles.errorMessage}>{error}</div>
            <button className={styles.retryBtn} onClick={onRetry}>
                Попробовать снова
            </button>
        </div>
    );
};

export default ErrorBlock;
