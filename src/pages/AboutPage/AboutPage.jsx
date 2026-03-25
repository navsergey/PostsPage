import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutCard}>
                <div className={styles.aboutHeader}>
                    <h1 className={styles.aboutTitle}>О проекте</h1>
                    <div className={styles.aboutIcon}>📝</div>
                </div>
                
                <div className={styles.aboutContent}>
                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>Что это за сайт?</h2>
                        <p className={styles.sectionText}>
                            PostsPage — это современное веб-приложение для управления постами, 
                            созданное с использованием React. Сайт позволяет просматривать, 
                            фильтровать, сортировать и управлять коллекцией постов.
                        </p>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>Основные возможности</h2>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.featureIcon}>📋</span>
                                <span>Просмотр списка постов с пагинацией</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.featureIcon}>🔍</span>
                                <span>Поиск и фильтрация постов</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.featureIcon}>➕</span>
                                <span>Создание новых постов</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.featureIcon}>🗑️</span>
                                <span>Удаление постов</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>Технологии</h2>
                        <div className={styles.techGrid}>
                            <div className={styles.techItem}>React</div>
                            <div className={styles.techItem}>JavaScript</div>
                            <div className={styles.techItem}>CSS Modules</div>
                            <div className={styles.techItem}>Axios</div>
                        </div>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>Источник данных</h2>
                        <p className={styles.sectionText}>
                            Данные для постов предоставлены через JSONPlaceholder API — 
                            бесплатный REST API для тестирования и прототипирования.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;