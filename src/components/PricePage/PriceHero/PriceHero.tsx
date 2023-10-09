import Image from 'next/image';
import styles from './PriceHero.module.scss';
import priceHero from '../../../../public/images/priceHero.png';

const priceImgHero = {
  width: '100%',
  height: '100vh',
};

const PriceHero = () => {
  return (
    <section className={styles.priceHero}>
      <div className={styles.priceHero__wrap}>
        <Image src={priceHero} alt='price hero' style={priceImgHero} />
        <div>
          <span>
            Сон, равнозначный <br /> облакам.
          </span>
        </div>
      </div>
    </section>
  );
};

export { PriceHero };
