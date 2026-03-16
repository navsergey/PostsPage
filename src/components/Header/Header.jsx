import React from 'react';
import classes from "./Header.module.css";
const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.headerTitle}>Список постов</div>
                <div className={classes.headerSubtitle}>Управляйте постами: добавляйте, ищите и удаляйте</div>
            </div>
        </header>
    );
};

export default Header;