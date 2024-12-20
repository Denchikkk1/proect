import React from 'react';
import styles from './Home.module.css';
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img6 from "./6.png";

function Home() {
  return (
    <div class={styles.home}>
      <section class={styles.hero_section}>
        <div class={styles.hero_overlay}>
          <h1 class={styles.home_title}>Добро пожаловать на наш сайт!</h1>
          <p class={styles.home_text}> Качественные студенческие услуги для вашего успеха!</p>
        </div>
      </section>

      <section class={styles.content_section}>
        <div class={styles.content_item}>
          <img src={img1} alt="О нас" class={styles.content_image_left}/>
          <div class={styles.content_text}>
            <h2>О нас</h2>
            <p> Мы помогаем студентам достигать своих целей благодаря качественным
              и надёжным услугам в любой дисциплине. У нас 1200+ преподавателей-практиков. 
              Курсы разрабатывают и ведут студенты лучших вузов, которые точно знают, какие знания и навыки пригодятся ученикам в будущем.
              Программы рассчитаны на начинающих и подойдут всем: от школьников до взрослых, 
              которые хотят попробовать себя в ИТ. </p>
          </div>
        </div>

        <section class={styles.benefits_section}>
          <h2 class={styles.section_title}>Почему выбирают нас?</h2>
          <div class={styles.benefits}>
            <div class={styles.benefit_item}>
              <img src={img2} alt="Качество" class={styles.benefit_image}/>
              <h3>Высокое качество</h3>
              <p>Мы гарантируем высокий уровень исполнения всех работ.</p>
            </div>
            
            <div class={styles.benefit_item}>
              <img src={img3} alt="Специалисты" class={styles.benefit_image}/>
              <h3>Опытные специалисты</h3>
              <p>Наши эксперты — профессионалы с опытом.</p>
            </div>
            
            <div class={styles.benefit_item}>
              <img src={img4} alt="Скорость" class={styles.benefit_image}/>
              <h3>Быстро и вовремя</h3>
              <p>Мы соблюдаем сроки и работаем оперативно.</p>
            </div>
          </div>
        </section>

        <div class={styles.content_item}>
          <div class={styles.content_text}>
            <h2>Наша миссия</h2>
            <p> Наша цель — сделать обучение проще и успешнее, предоставляя профессиональную
             поддержку каждому студенту. Мы верим, что каждый ученик заслуживает 
             качественной помощи, которая позволит ему сосредоточиться на самом главном 
             — развитии своих знаний и навыков. Мы стремимся быть надежным партнером на 
             вашем образовательном пути, предлагая решения, которые упрощают выполнение 
             сложных заданий, помогают экономить время и обеспечивают уверенность в 
             достижении ваших целей. </p>
          </div>
          <img src={img6} alt="Миссия" class={styles.content_image_right}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
