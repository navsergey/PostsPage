import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.headerContent}>
                    <div className={classes.headerTitle}>Список постов</div>
                    <div className={classes.headerSubtitle}>Управляйте постами: добавляйте, ищите и удаляйте</div>
                </div>
                <nav className={classes.navigation}>
                    <Link to="/" className={classes.navLink}>Главная</Link>
                    <Link to="/about" className={classes.navLink}>О проекте</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;