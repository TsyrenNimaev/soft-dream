import { useState } from 'react';
import Select from 'react-select';
import { optionsCoconuts, optionsSize, optionsWidthKids } from '@/store/store';
import { EmptyBox } from '../PriceCards/EmptyBox';
import { CardItem } from '../PriceCards/CardItem';
import { dataAdoultList, dataDefaultAdoult } from '@/store/data';

import styles from './Adults.module.scss';

const PriceCardsAdult = () => {
  const [isSize, setIsSize] = useState('');
  const [isCoconut, setisCoconut] = useState('');
  const [isWidth, setIsWidth] = useState('');

  const filteredList = (size: string, coconut: string, width: string) => {
    let result;
    if (size === 'all') return dataAdoultList;
    if (size && !coconut && !width)
      result = dataAdoultList.filter(
        (item) => item.id_size.lengthMattress === size
      );
    if (size && coconut && !width)
      result = dataAdoultList.filter(
        (item) =>
          item.id_size.lengthMattress === size && item.id_name === coconut
      );
    if (size && coconut && width)
      result = dataAdoultList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_name === coconut &&
          item.id_size.widthMattress === +width
      );
    if (!size && coconut && !width)
      result = dataAdoultList.filter((item) => item.id_name === coconut);
    if (!size && !coconut && width)
      result = dataAdoultList.filter(
        (item) => item.id_size.widthMattress === +width
      );
    if (size && !coconut && width)
      result = dataAdoultList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_size.widthMattress === +width
      );

    return result;
  };

  let filterList =
    filteredList(isSize, isCoconut, isWidth) || dataDefaultAdoult;

  const isDisabled = isSize === 'all' ? true : false;
  return (
    <div className={styles.priceCardsAdult}>
      <div className={styles.priceCardsAdult__select}>
        <Select
          placeholder='Выберите размер'
          options={optionsSize}
          isClearable
          className={styles['react-select-container']}
          classNamePrefix='react-select'
          onChange={(e) => setIsSize(e?.value === undefined ? '' : e?.value)}
        />
        <Select
          isDisabled={isDisabled}
          isClearable
          placeholder='Выберите наполнитель'
          options={optionsCoconuts}
          className={styles['react-select-container']}
          classNamePrefix='react-select'
          onChange={(e) => setisCoconut(e?.value === undefined ? '' : e?.value)}
        />
        <Select
          isDisabled={isDisabled}
          isClearable
          placeholder='Выберите ширину'
          options={optionsWidthKids}
          className={styles['react-select-container']}
          classNamePrefix='react-select'
          onChange={(e) => setIsWidth(e?.value === undefined ? '' : e?.value)}
        />
      </div>
      <ul className={styles.priceCardsAdult__list}>
        {filterList.length === 0 ? (
          <EmptyBox />
        ) : (
          filterList.map((card) => (
            <CardItem
              key={card.id}
              size={card.size}
              price={card.price}
              coconut_coir={card.material.coconut_coir}
              outMaterial={card.material.outMaterial}
              innerMaterial={card.material.innerMaterial}
              addMaterial={card.material.addMaterial}
              perimeter={card.material.perimeter}
              springBlock={card.material.springBlock}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export { PriceCardsAdult };
