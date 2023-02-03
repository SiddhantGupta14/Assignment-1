import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav>
    <ul className={classes.pagination}>
      {pageNumbers.map(number => (
        <li key={number} className={classes.pageItem}>
          <a onClick={() => paginate(number)} href='!#' className={classes.pageLink}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  )
  };
  
export default Pagination;