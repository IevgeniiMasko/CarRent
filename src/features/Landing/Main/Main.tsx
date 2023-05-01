import React from 'react';

// Assets
import bcgImage from '@/assets/img/mainPageBackground.png';

// Styles
import styles from './Main.module.scss';
import { Container } from '@/layouts/Container';
import { SearchBar } from './SearchBar';

const Main = () => {
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${bcgImage.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <Container>
        <h1 className={styles.title}>Орендую автівку легко!</h1>
        <h2 className={styles.subtitle}>
          Вирушай в подорож на авто за найкращою ціною
        </h2>
        <SearchBar />
      </Container>
    </div>
  );
};

export default Main;
