import { Great_Vibes } from 'next/font/google';

import styles from './About.module.scss';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const About = () => {
  return (
    <section className={styles.about}>
      <h2>О нас</h2>
      <p>
        Софт Дрим - вундеркинд среди ортопедических матрасов, благодарный
        избраник спин и спаситель для всех, кто стремится к качественному
        отдыху. Наша миссия - сделать Ваш сон незабываемым и убедить всех
        важности здорового покоя.
      </p>
      <div className={styles.about__info}>
        <span>
          <span className={greatVibes.className}>10+</span>
          моделей матрасов
        </span>
        <span>
          <span className={greatVibes.className}>1000+</span>
          довольных клиентов
        </span>
        <span>
          <span className={greatVibes.className}>14</span>
          лет опыта
        </span>
      </div>
      <div className={styles.about__container}>
        <div>
          <span className={greatVibes.className}>3</span>года гарантии
        </div>
        <div>
          <span className={greatVibes.className}>48</span>часов доставки
        </div>
        <div>
          <span className={greatVibes.className}>100</span>процентов качсетва
        </div>
      </div>
    </section>
  );
};

export { About };
