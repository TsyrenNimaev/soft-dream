import Select from 'react-select';

import styles from './PriceCards.module.scss';

interface Props {
  namePlaceholder: string;
  options: [];
  // handler: (e: []) => void;
  isDisabled: boolean;
}

const SelectBox = ({
  namePlaceholder,
  options,
  // handler,
  isDisabled,
}: Props) => {
  return (
    <div className={styles.priceCards__wrap__select}>
      <Select
        placeholder={namePlaceholder}
        options={options}
        className={styles['react-select-container']}
        classNamePrefix='react-select'
        isClearable
        // onChange={handler}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export { SelectBox };
