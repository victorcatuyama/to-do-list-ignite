import styles from './Header.module.scss';

import toDoLogo from '../assets/todo-logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logotipo do toDo" />
  </header>
  );
}