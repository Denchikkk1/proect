import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <div class={styles.logo}>Студенческие Услуги</div>
        <div class={styles.menu_icon} onClick={toggleMenu}>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
        </div>
        <ul class={`${styles.nav_links} ${menuOpen ? styles.nav_links_active : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Услуги</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Корзина</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
