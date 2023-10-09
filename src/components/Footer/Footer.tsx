import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faVk,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <div>
          <FontAwesomeIcon
            icon={faVk as IconProp}
            className={styles.brand__icon}
          />
          <FontAwesomeIcon
            icon={faWhatsapp as IconProp}
            className={styles.brand__icon}
          />
          <FontAwesomeIcon
            icon={faTelegram as IconProp}
            className={styles.brand__icon}
          />
        </div>
        <div>
          © Софт Дрим
          <span>
            <i>На нас можно положиться</i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
