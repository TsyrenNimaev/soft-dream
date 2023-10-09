import { Great_Vibes } from 'next/font/google';

import styles from './PriceCards.module.scss';

const greatVibes = Great_Vibes({ weight: '400' });

interface Props {
  size: string;
  price: string;
  coconut_coir: string;
  outMaterial: string;
  innerMaterial: string;
  addMaterial?: string;
  perimeter?: string;
  springBlock?: string;
}

const CardItem = ({
  size,
  price,
  coconut_coir,
  outMaterial,
  innerMaterial,
  addMaterial,
  perimeter,
  springBlock,
}: Props) => {
  return (
    <li className={styles.priceCards__wrap__list__card}>
      <span className={greatVibes.className}>
        <i>&#8381;</i> {price}/шт
      </span>
      <ul>
        <li>{size}</li>
        <li>{coconut_coir}</li>
        <li>{outMaterial}</li>
        {!perimeter ? null : <li>{perimeter}</li>}
        {!addMaterial ? null : <li>{addMaterial}</li>}
        <li>{innerMaterial}</li>
        {!springBlock ? null : <li>{springBlock}</li>}
      </ul>
      <button>Заказать</button>
    </li>
  );
};

export { CardItem };
