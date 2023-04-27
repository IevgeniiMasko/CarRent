import React from 'react';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import Select, { SelectProps, selectClasses } from '@mui/base/Select';
import Option from '@mui/base/Option';
import Popper from '@mui/base/Popper';
import { styled } from '@mui/system';

// Components
import { Container } from '../Container';

// Other
import logo from '../../assets/icons/logo.svg';

// Styles
import styles from './Header.module.scss';

const StyledButton = styled('button')(
  () => `
  background: #fff;
  font-size: inherit;

  &.${selectClasses.expanded} {
    &::after {
      content: '▴';
      margin-left: 5px;
    }
  }

  &::after {
    content: '▾';
    margin-left: 5px;
    float: right;
  }
  `
);

const StyledListbox = styled('ul')(
  () => `
  padding: 6px;
  margin: 12px 0;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #d0d7de;
  min-width: 80px;
  `
);

const StyledOption = styled(Option)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    font-weight: 700;
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: SelectProps<TValue, Multiple>['slots'] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  // eslint-disable-next-line no-unused-vars
  props: SelectProps<TValue, Multiple> & React.RefAttributes<HTMLButtonElement>
) => React.ReactElement;

const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>
          <nav className={styles.mainNav}>
            <ul>
              <li>
                <a href="#">Пошук авто</a>
              </li>
              <li>
                <a href="#">Більше</a>
              </li>
              <li>
                <a href="#">Заробляй з RentCar</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.userNav}>
            <ul className={styles.userNavList}>
              <li>
                <CustomSelect defaultValue={10}>
                  <StyledOption value={10}>Укр</StyledOption>
                  <StyledOption value={20}>Eng</StyledOption>
                </CustomSelect>
              </li>
              <li>
                <a href="#">Вхід</a>
              </li>
              <li>
                <a href="#">Зареєструватися</a>
              </li>
            </ul>
          </nav>
          <div className={styles.userIcon}>
            <PersonIcon />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
