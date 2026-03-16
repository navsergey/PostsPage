import React from 'react';
import classes from './FilterAndSearch.module.css';

const FilterAndSearchCard = ({filter, setFilter, options, defaultValue}) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardTitle}>
                Фильтр и поиск
            </div>
            <div className={classes.filterRow}>
                <select
                    className={classes.filterSelect}
                    value={filter.sort}
                    onChange={(e)=>setFilter({...filter, sort:e.target.value})}
                >
                    <option disabled value="default">{defaultValue}</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}

                </select>

                <div className={classes.searchWrapper}>
                    <span className={classes.searchIcon}>?</span>
                    <input
                        className={classes.searchInput}
                        placeholder="Поиск..."
                        value={filter.query}
                        onChange={(e)=>setFilter({...filter, query:e.target.value})}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterAndSearchCard;