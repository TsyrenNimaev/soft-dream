import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

import styles from './Prices.module.scss';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const Prices = () => {
  return (
    <section className={styles.prices}>
      <h3>Готовы изменить качество своего сна?</h3>
      <div className={styles.prices__wrap}>
        <div>
          <h4>Ограниченное предложение</h4>
          <span className={greatVibes.className}>
            <i>&#8381;</i> 9 999/шт
          </span>
          <ul>
            <li>&#10003; Средняя жесткость</li>
            <li>&#10003; Бесплатная доставка</li>
            <li>&#10003; Качественный материал</li>
            <li>&#10003; Износостойкий</li>
          </ul>
          <button>Заказать сейчас</button>
        </div>
        <div>
          <h4>Стандарт</h4>
          <span className={greatVibes.className}>
            <i>&#8381;</i> 11 999/шт
          </span>
          <ul>
            <li>&#10003; Средняя жесткость</li>
            <li>&#10003; Бесплатная доставка</li>
            <li>&#10003; Качественный материал</li>
            <li>&#10003; Износостойкий</li>
          </ul>
          <button>Заказать сейчас</button>
        </div>
        <div>
          <h4>Премиум коллекция</h4>
          <span className={greatVibes.className}>
            <i>&#8381;</i> 17 999/шт
          </span>
          <ul>
            <li>&#10003; Средняя жесткость</li>
            <li>&#10003; 7 лет гарантии</li>
            <li>&#10003; Качественный материал</li>
            <li>&#10003; Износостойкий</li>
          </ul>
          <button>Заказать сейчас</button>
        </div>
      </div>
      <Link href='/price' className={styles.prices__btn}>
        Посмотреть все цены
      </Link>
      {/* <button className={styles.prices__btn}>Посмотреть все цены</button> */}
    </section>
  );
};

export { Prices };
