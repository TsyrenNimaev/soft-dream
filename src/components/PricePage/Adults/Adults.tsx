'use client';
import Image from 'next/image';

// import { PriceCards } from '../PriceCards/PriceCards';
import { PriceCardsAdult } from './PriceCardsAdult';

import adultImg from '../../../../public/images/adoultImg.png';
import styles from './Adults.module.scss';

const adultImgStyle = {
  width: '500px',
  borderRadius: '70px 70px 200px 70px',
  filter: 'sepia(.5)',
};

const Adults = () => {
  return (
    <section className={styles.adult}>
      <div className={styles.adult__decoration}>
        <span></span>
      </div>
      <h4>Матрасы для взрослых</h4>
      <div className={styles.adult__desc}>
        <p>
          Матрасы для взрослых представлены разнообразными моделями,
          разработанными для удовлетворения всех видов потребностей и
          предпочтений. Насладитесь непревзойденным комфортом и заботой о вашей
          спине – и ваши ночи станут настоящим наслаждением!
        </p>
        <Image src={adultImg} alt='adoultImg' style={adultImgStyle} />
      </div>
      <PriceCardsAdult />
    </section>
  );
};

export { Adults };
