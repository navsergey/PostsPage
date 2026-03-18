import React, {useMemo} from 'react';
import classes from './Pagination.module.css';
import {getPagesArray} from "../../utils/pages";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const pagesArray = useMemo(()=>{
        return getPagesArray(totalPages);
    }, [totalPages]);


    const handleNextPage = () => {
        if (currentPage !== totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    return (
        <div className={classes.pagination}>
            <button
                className={`${classes.paginationBtn} ${classes.paginationPrev}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                &lt; Prev
            </button>
            {pagesArray.map((page) => (
                <button
                    key={page}
                    className = {`${classes.paginationBtn} ${page === currentPage ? classes.active : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`${classes.paginationBtn} ${classes.paginationNext}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                Next &gt;
            </button>
        </div>
    );
};

export default Pagination;
