import { IHeaderType, IOptionsSelect } from '@/types/types';
import { dataKidsList } from './data';

export const homeHeader: IHeaderType = {
  title: 'Софт Дрим',
  about: 'О нас',
  products: 'Продукты',
  prices: 'Цены',
  contacts: 'Контакты',
}

export const pricesHeader: IHeaderType = {
  backLink: 'Главное',
  about: 'Информация',
  kids: 'Детские',
  adoult: 'Взрослые',
}

export const optionsCoconuts: IOptionsSelect[] = [
  {
    value: 'not_coconut',
    label: 'Без кокосовой койры'
  },
  {
    value: 'one_coconut',
    label: 'С добавлением кокосовой койры с одной стороны'
  },
  {
    value: 'two_coconuts',
    label: 'С добавлением кокосовой койры с двух сторон'
  },
]

export const optionsSize: IOptionsSelect[] = [
  {
    value: 'all',
    label: 'Показать все'
  },
  {
    value: 'up_to_160cm',
    label: 'до 160 см (включительно)'
  },
  {
    value: 'from_160cm_to_200',
    label: 'от 160 см до 200 см',
  },
] 

export const optionsWidthKids: IOptionsSelect[] = [
  {
    value: '60',
    label: 'Ширина 60 см'
  },
  {
    value: '70',
    label: 'Ширина 70 см'
  },
  {
    value: '80',
    label: 'Ширина 80 см'
  },
  {
    value: '90',
    label: 'Ширина 90 см'
  },
  {
    value: '100',
    label: 'Ширина 100 см'
  },
  {
    value: '110',
    label: 'Ширина 110 см'
  },
  {
    value: '120',
    label: 'Ширина 120 см'
  },
  {
    value: '130',
    label: 'Ширина 130 см'
  },
  {
    value: '140',
    label: 'Ширина 140 см'
  },
  {
    value: '150',
    label: 'Ширина 150 см'
  },
  {
    value: '160',
    label: 'Ширина 160 см'
  },
]

export const optionsWidthAdoult: IOptionsSelect[] = [
  {
    value: '80',
    label: 'Ширина 80 см'
  },
  {
    value: '90',
    label: 'Ширина 90 см'
  },
  {
    value: '100',
    label: 'Ширина 100 см'
  },
  {
    value: '110',
    label: 'Ширина 110 см'
  },
  {
    value: '120',
    label: 'Ширина 120 см'
  },
  {
    value: '130',
    label: 'Ширина 130 см'
  },
  {
    value: '140',
    label: 'Ширина 140 см'
  },
  {
    value: '150',
    label: 'Ширина 150 см'
  },
  {
    value: '160',
    label: 'Ширина 160 см'
  },
  {
    value: '170',
    label: 'Ширина 170 см'
  },
  {
    value: '180',
    label: 'Ширина 180 см'
  },
  {
    value: '200',
    label: 'Ширина 200 см'
  },
]

export const optionsHeight: IOptionsSelect[] = [
  {
    value: '5',
    label: 'Высота 5 см'
  },
  {
    value: '8',
    label: 'Высота 8 см'
  },
  {
    value: '10',
    label: 'Высота 10 см'
  },
]

