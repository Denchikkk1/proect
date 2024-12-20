import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', surname: '', contactMethods: { phone: false, email: false, },
    phone: '', email: '', message: '', age: '', role: 'student', siteRating: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        contactMethods: { ...formData.contactMethods, [name]: checked },
      });
    }
    else { setFormData({ ...formData, [name]: value }); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, email } = formData.contactMethods;
    if (!phone && !email) {
      alert('Пожалуйста, выберите хотя бы один способ связи (Телефон или Email) и заполните соответствующее поле.');
      return;
    }

    if (phone && !formData.phone.trim()) {
      alert('Вы выбрали способ связи "Позвонить", но не указали номер телефона.');
      return;
    }

    if (email && !formData.email.trim()) {
      alert('Вы выбрали способ связи "Ответить на почту", но не указали email.');
      return;
    }

    alert(`Спасибо за сообщение, ${formData.name}!`);
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }


  return (
    <section id="contact" class={styles.contact}>
      <h2>Свяжитесь с нами</h2>
      <p class={styles.description}>
        <span class={styles.interactiveText}>
          По всем вопросам вы можете обратиться к нам, и в течение нескольких минут после отправки заявки вам перезвонят или напишут на почту.
        </span>
      </p>

      <form onSubmit={handleSubmit} class={styles.form}>
        <input
          type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange}
          required minLength="2" maxLength="30" />

        <input
          type="text" name="surname" placeholder="Фамилия" value={formData.surname} onChange={handleChange}
          required minLength="2" maxLength="30" />

        <div class={styles.contactMethods}>
          <label>
            <input type="checkbox" name="phone" checked={formData.contactMethods.phone} onChange={handleChange} />
            Позвонить
          </label>

          <label>
            <input type="checkbox" name="email" checked={formData.contactMethods.email} onChange={handleChange} />
            Ответить на почту
          </label>

        </div>

        {formData.contactMethods.phone && (
          <input
            type="tel" name="phone" placeholder="Номер телефона" value={formData.phone} onChange={handleChange}
            pattern="^\+?\d{10,15}$" title="Введите номер телефона в формате +1234567890" required={formData.contactMethods.phone} />
        )}

        {formData.contactMethods.email && (
          <input
            type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            required={formData.contactMethods.email}/>
        )}

        <input
          type="number" name="age" placeholder="Возраст" value={formData.age} onChange={handleChange}
          min="6" max="100" required />

        <label>
          Роль:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Студент</option>
            <option value="school">Школьник</option>
          </select>
        </label>

        <div class={styles.siteRating}>
          <p>Как вам работа сайта?</p>
          <div class={styles.siteRatingOptions}>
            <label>
              <input type="radio" name="siteRating" value="good" onChange={handleChange} />
              😊 Хорошая
            </label>

            <label>
              <input type="radio" name="siteRating" value="average" onChange={handleChange} />
              😐 Средняя
            </label>

            <label>
              <input type="radio" name="siteRating" value="bad" onChange={handleChange} />
              😞 Плохая
            </label>
          </div>
        </div>

        <textarea name="message" placeholder="Ваше сообщение" value={formData.message} onChange={handleChange}
          required />

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;
