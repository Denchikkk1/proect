import React, { useState } from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ title, description, image, onDetailsClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div class={styles.card}>
      <img
        src={image}
        alt={title}
        class={`${styles.image} ${hover ? styles.imageHover : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <button class={styles.detailsBtn} onClick={onDetailsClick}>
        Подробнее
      </button>
    </div>
  );
}

export default ServiceCard;