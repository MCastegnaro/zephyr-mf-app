import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <p>This is a header from remote-header app</p>
    </header>
  );
};

export default Header;
