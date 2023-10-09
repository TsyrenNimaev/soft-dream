import Image from 'next/image';
import { PriceCards } from '../PriceCards/PriceCards';

import kidsImage from '../../../../public/images/kids2.jpg';
import decoration1 from '../../../../public/images/Group1.svg';
import decoration2 from '../../../../public/images/Group2.svg';
import decoration3 from '../../../../public/images/Group3.svg';
import decoration4 from '../../../../public/images/Group4.svg';
import styles from './Kids.module.scss';

const kidsImageStyle = {
  width: '500px',
  height: '500px',
  borderRadius: '70px 200px 70px 70px',
};

const Kids = () => {
  return (
    <section className={styles.kids}>
      <h4>Детские матрасы</h4>
      <div className={styles.kids__desc}>
        <p>
          Наши детские матрасы созданы с особым вниманием к комфорту,
          безопасности и экологичности. Ваши дети заслуживают лучшего во время
          сна, и наши матрасы гарантируют им мечтательные ночные приключения!
        </p>
        <div className={styles.kids__desc__wrap}>
          <Image src={kidsImage} alt='kids' style={kidsImageStyle} />
          <Image
            src={decoration4}
            alt='decoration'
            className={styles.kids__desc__wrap__img}
          />
        </div>
      </div>
      <div className={styles.kids__decoration}>
        <Image
          src={decoration1}
          alt='decoration'
          className={styles.kids__decoration__img}
        />
        <Image
          src={decoration2}
          alt='decoration'
          className={styles.kids__decoration__img}
        />
        <Image
          src={decoration3}
          alt='decoration'
          className={styles.kids__decoration__img}
        />
      </div>
      <h4>Матрас беспружинный ППУ (Кидс)</h4>
      <PriceCards />
    </section>
  );
};

export { Kids };
