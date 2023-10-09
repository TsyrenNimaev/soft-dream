import styles from './Hero.module.scss';
import heroImg from '../../../../public/images/maxresdefault.png';
import Image from 'next/image';

const imgStyle = {
  borderRadius: '0 0 100px 100px',
  width: '100%',
  height: '100%',
  filter: 'hue-rotate(200deg)',
};

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__decoration}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.hero__container}>
        <div>Добро пожаловать!</div>
        <p>
          Откройте для себя уникальный мир комфорта исключительных
          ортопедических матрасов Софт Дрим. Наша продукция гарантирует
          незабываемые ощущения и мечтательный сон. <br />
          На нас можно положиться!
        </p>
      </div>
      <div style={{ background: '#fff', marginTop: '80px' }}>
        <Image src={heroImg} alt='hero' style={imgStyle} />
      </div>
    </div>
  );
};

export { Hero };
