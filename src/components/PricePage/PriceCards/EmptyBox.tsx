// import Image from 'next/image'
import styles from './PriceCards.module.scss';

const EmptyBox = () => {
  return (
    <div className={styles.priceCards__wrap__list__empty}>
      <p>
        К сожалению, ваш поиск не дал результатов. Попробуйте другие размеры.
      </p>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export { EmptyBox };
