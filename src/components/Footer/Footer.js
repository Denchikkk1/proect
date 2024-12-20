import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer class={styles.footer}>
      <p class={styles.footer_text}>
        © 2024 Студенческие Услуги. Все права защищены.
      </p>
      <div class={styles.footer_links}>
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/terms">Условия использования</a>
        <a href="/contact">Свяжитесь с нами</a>
      </div>
    </footer>
  );
}

export default Footer;