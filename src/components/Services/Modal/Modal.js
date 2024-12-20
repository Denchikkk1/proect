import React from 'react';
import styles from './Modal.module.css';

function Modal({ title, details, price, image, onAddToCart, onClose }) {
  const handleAddToCart = () => {
    const item = { title, details, price };
    onAddToCart(item);
    onClose();
  };

  return (
    <div class={styles.overlay}>
      <div class={styles.modal}>
        <button class={styles.closeBtn} onClick={onClose}>&times;</button>
        <img src={image} alt={title} class={styles.image} />
        <h3>{title}</h3>
        <p class={styles.details}>{details}</p>
        <ul class={styles.list}>
          <li>Индивидуальные консультации</li>
          <li>Доступ к дополнительным материалам</li>
          <li>Поддержка 24/7</li>
          <li>Гибкий график занятий</li>
        </ul>
        <p class={styles.price}>Стоимость: <strong>{price}₽</strong></p>
        <button class={styles.addToCartBtn} onClick={handleAddToCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default Modal;
