'use client';
import { useState } from 'react';
import Select from 'react-select';
import { CardItem } from './CardItem';
import { EmptyBox } from './EmptyBox';
import { dataDefaultKids, dataKidsList } from '@/store/data';
import {
  optionsCoconuts,
  optionsHeight,
  optionsSize,
  optionsWidthKids,
} from '@/store/store';

import styles from './PriceCards.module.scss';

const PriceCards = () => {
  const [isSize, setIsSize] = useState('');
  const [isCoconut, setisCoconut] = useState('');
  const [isWidth, setIsWidth] = useState('');
  const [isHeight, setIsHeight] = useState('');

  const filteredList = (
    size: string,
    coconut: string,
    width: string,
    height: string
  ) => {
    let result;
    if (size === 'all') return dataKidsList;
    if (size && !coconut && !width && !height)
      result = dataKidsList.filter(
        (item) => item.id_size.lengthMattress === size
      );
    if (size && coconut && !width && !height)
      result = dataKidsList.filter(
        (item) =>
          item.id_size.lengthMattress === size && item.id_name === coconut
      );
    if (size && coconut && width && !height)
      result = dataKidsList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_name === coconut &&
          item.id_size.widthMattress === +width
      );
    if (size && coconut && width && height)
      result = dataKidsList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_name === coconut &&
          item.id_size.widthMattress === +width &&
          item.id_size.heightMattress === +height
      );
    if (!size && coconut && !width && !height)
      result = dataKidsList.filter((item) => item.id_name === coconut);
    if (!size && !coconut && width && !height)
      result = dataKidsList.filter(
        (item) => item.id_size.widthMattress === +width
      );
    if (!size && !coconut && !width && height)
      result = dataKidsList.filter(
        (item) => item.id_size.heightMattress === +height
      );
    if (size && !coconut && !width && height)
      result = dataKidsList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_size.heightMattress === +height
      );
    if (size && !coconut && width && !height)
      result = dataKidsList.filter(
        (item) =>
          item.id_size.lengthMattress === size &&
          item.id_size.widthMattress === +width
      );
    return result;
  };

  let filterList =
    filteredList(isSize, isCoconut, isWidth, isHeight) || dataDefaultKids;

  const isDisabled = isSize === 'all' ? true : false;

  return (
    <>
      <div className={styles.priceCards}>
        <div className={styles.priceCards__wrap}>
          <div className={styles.priceCards__wrap__select}>
            <Select
              placeholder='Выберите размер'
              options={optionsSize}
              className={styles['react-select-container']}
              classNamePrefix='react-select'
              isClearable
              onChange={(e) =>
                setIsSize(e?.value === undefined ? '' : e?.value)
              }
            />
            <Select
              isDisabled={isDisabled}
              isClearable
              placeholder='Выберите наполнитель'
              options={optionsCoconuts}
              className={styles['react-select-container']}
              classNamePrefix='react-select'
              onChange={(e) =>
                setisCoconut(e?.value === undefined ? '' : e?.value)
              }
            />
            <Select
              isDisabled={isDisabled}
              isClearable
              placeholder='Выберите ширину'
              options={optionsWidthKids}
              className={styles['react-select-container']}
              classNamePrefix='react-select'
              onChange={(e) =>
                setIsWidth(e?.value === undefined ? '' : e?.value)
              }
            />
            <Select
              isDisabled={isDisabled}
              isClearable
              placeholder='Выберите высоту'
              options={optionsHeight}
              className={styles['react-select-container']}
              classNamePrefix='react-select'
              onChange={(e) =>
                setIsHeight(e?.value === undefined ? '' : e?.value)
              }
            />
          </div>
          <ul className={styles.priceCards__wrap__list}>
            {filterList.length === 0 ? (
              <EmptyBox />
            ) : (
              filterList.map((card) => {
                return (
                  <CardItem
                    key={card.id}
                    size={card.size}
                    price={card.price}
                    coconut_coir={card.material.coconut_coir}
                    outMaterial={card.material.outMaterial}
                    innerMaterial={card.material.innerMaterial}
                  />
                );
              })
            )}
          </ul>
        </div>
        {/* <button className={styles.priceCards__btn}>Посмотреть еще</button> */}
      </div>
    </>
  );
};

export { PriceCards };
