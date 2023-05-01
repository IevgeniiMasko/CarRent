import React from 'react';

// Styles
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.search}></div>
      <button className={styles.button}>Знайти</button>
    </div>
  );
};

export default SearchBar;
