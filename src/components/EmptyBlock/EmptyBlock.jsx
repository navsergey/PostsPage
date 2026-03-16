import React from 'react';
import styles from './EmptyBlock.module.css';

const EmptyBlock = () => {
    return (
        <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
                ?
            </div>
            <div className={styles.emptyTitle}>Посты не найдены</div>
            <div className={styles.emptySubtitle}>Попробуйте изменить параметры поиска</div>
        </div>
    );
};

export default EmptyBlock;