import React from 'react';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import { LangSwitcher } from './LangSwitcher';

// Components
import { Container } from '@/layouts/Container';

// Hooks
import useLangContent from '@/hooks/useLangContent';

// Other
import logo from '@/assets/icons/logo.svg';

// Styles
import styles from './Header.module.scss';

const Header = () => {
  const langContent = useLangContent('header');

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.body}>
          <div className={styles.headerLeft}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" priority />
            </div>
            <nav className={styles.mainNav}>
              <ul>
                <li>
                  <a href="#">{langContent.search}</a>
                </li>
                <li>
                  <a href="#">{langContent.more}</a>
                </li>
                <li>
                  <a href="#">{langContent.earn}</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.headerRight}>
            <nav className={styles.userNav}>
              <ul className={styles.userNavList}>
                <li>
                  <LangSwitcher />
                </li>
                <li>
                  <a href="#">{langContent.signin}</a>
                </li>
                <li>
                  <a href="#">{langContent.signup}</a>
                </li>
              </ul>
            </nav>
            <div className={styles.userIcon}>
              <PersonIcon />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
