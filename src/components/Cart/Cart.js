import React, { useState } from "react";
import styles from "./Cart.module.css";

function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", card: "", date: "", agree: false,
    });

    const [errors, setErrors] = useState({});
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Имя обязательно";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Некорректный email";
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Телефон должен содержать 10 цифр";
        if (!/^\d{16}$/.test(formData.card)) newErrors.card = "Номер карты должен содержать 16 цифр";
        if (!formData.date) newErrors.date = "Выберите дату";
        if (!formData.agree) newErrors.agree = "Вы должны согласиться с условиями";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); } 
        else {
            alert("Заказ успешно отправлен!");
            setFormData({ name: "", email: "", phone: "", card: "", date: "", agree: false, });
            onClearCart();
        }
    };

    return (
        <div class={styles.mains}>
            <div class={styles.cartWrapper}>
                
                {/* Первый блок: Выбранные услуги и итоговая сумма */}
                
                <div class={styles.cartItemsContainer}>
                    <h2 class="animate__animated animate__zoomIn" >Корзина</h2>
                    {cartItems.length > 0 ? (
                        <ul class={styles.cartItems}>
                            {cartItems.map((item, index) => (
                                <li key={index} class={styles.cartItem}>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p class={styles.itemDetails}>Цена: {item.price}₽</p>
                                    </div>
                                    <button class={styles.removeBtn} onClick={() => onRemoveFromCart(index)}>
                                        Удалить
                                    </button>
                                </li> ))}
                        </ul>
                    ) : (<p>Корзина пуста</p>)}

                    <div class={styles.total}>
                        <strong>Итоговая сумма: </strong>
                        <span class={styles.totalPrice}>{totalPrice}₽</span>
                    </div>
                </div>

                {/* Второй блок: Форма оплаты */}

                <div class={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <h2 class="animate__animated animate__zoomIn" >Оплата</h2>
                        <div class={styles.inlineField}>
                            <label>Имя:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Введите ваше имя" />
                            {errors.name && <span class={styles.error}>{errors.name}</span>}
                        </div>

                        <div class={styles.inlineField}>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="example@mail.com"/>
                            {errors.email && <span class={styles.error}>{errors.email}</span>}
                        </div>

                        <div class={styles.inlineField}>
                            <label>Телефон:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="1234567890"/>
                            {errors.phone && <span class={styles.error}>{errors.phone}</span>}
                        </div>

                        <div class={styles.inlineField}>
                            <label>Номер карты:</label>
                            <input type="text" name="card" value={formData.card} onChange={handleInputChange} placeholder="1234 5678 9012 3456"
                            />
                            {errors.card && <span class={styles.error}>{errors.card}</span>}
                        </div>

                        <div class={styles.inlineField}>
                            <label>Дата оплаты:</label>
                            <input type="date" name="date" value={formData.date} onChange={handleInputChange}/>
                            {errors.date && <span class={styles.error}>{errors.date}</span>}
                        </div>

                        <div class={styles.checkboxContainer}>
                            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange}/>
                            <label>
                                <a href="/privacy"> Я согласен с политикой конфиденциальности</a>
                            </label>
                            {errors.agree && <span class={styles.error}>{errors.agree}</span>}
                        </div>

                        <button type="submit"
                            class={`${styles.submitBtn} ${!formData.agree || cartItems.length === 0 ? styles.disabledBtn : "" }`}
                            disabled={!formData.agree || cartItems.length === 0}>
                            Оплатить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cart;