import React, { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard.js';
import Modal from './Modal/Modal.js';
import styles from './Services.module.css';
import math from './images/math.png';
import physics from './images/physics.png';
import prog from './images/prog.png';
import vmath from './images/vmath.png';
import alg from './images/alg.png';
import web from './images/web.png';

function Services({ onAddToCart }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "Математика", 
      description: "Помощь в решении задач и подготовка к экзаменам.", 
      details: "Индивидуальная подготовка к экзаменам и тестам с лучшими преподавателями.",
      price: 1500,
      image: math
    },
    { 
      title: "Физика", 
      description: "Объяснение теории и практика на задачах.", 
      details: "Разбираем сложные темы, выполняем лабораторные и задачи.", 
      price: 1800,
      image: physics
    },
    { 
      title: "Программирование", 
      description: "Курсы по Python, C++, Java и другим языкам.", 
      details: "Обучение основам и продвинутым концепциям программирования.",
      price: 2000,
      image: prog
    },
    { 
      title: "Высшая математика", 
      description: "Помощь с интегралами, дифференциалами и т.д.", 
      details: "Подготовка по дифференциальным уравнениям и интегралам.", 
      price: 1600,
      image: vmath
    },
    { 
      title: "Алгоритмы и структуры данных", 
      description: "Разбор алгоритмов для решения задач.", 
      details: "Обучение алгоритмам, их реализации и оптимизации.", 
      price: 2500,
      image: alg
    },
    { 
      title: "Web-разработка", 
      description: "Основы HTML, CSS и JavaScript.", 
      details: "Создание сайтов с нуля, адаптивная верстка, работа с React.js.", 
      price: 2200,
      image: web
    }
  ];

  return (
    <section id="services" class={styles.services}>
      <h2 className="animate__animated animate__fadeInDown">Наши Услуги</h2>
      <div class={styles.cards}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            onDetailsClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {selectedService && (
        <Modal 
          title={selectedService.title}
          details={selectedService.details}
          price={selectedService.price}
          image={selectedService.image}
          onAddToCart={() => { 
            onAddToCart(selectedService); 
            setSelectedService(null); 
          }}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}

export default Services;
