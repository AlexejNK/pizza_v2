import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'

const Pagination = () => {
  return (
      <ReactPaginate
          className={styles.container}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(event) => console.log(event)}
      pageRangeDisplayed={6}
      pageCount={3}
      previousLabel="< previos"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;