import { IHeaderType } from '@/types/types';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = ({
  title,
  about,
  products,
  prices,
  contacts,
  kids,
  adoult,
  backLink,
}: IHeaderType) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {!title ? null : (
          <h1 className={styles.header__container__title}>{title}</h1>
        )}
        {!backLink ? null : (
          <Link href='/' className={styles.header__container__backLink}>
            Главная
          </Link>
        )}
        <nav>
          <ul>
            <li>
              <a href='#'>{about}</a>
            </li>
            {!products ? null : (
              <li>
                <a href='#'>{products}</a>
              </li>
            )}
            {!prices ? null : (
              <li>
                <a href='#'>{prices}</a>
              </li>
            )}
            {!contacts ? null : (
              <li>
                <a href='#'>{contacts}</a>
              </li>
            )}
            {!kids ? null : (
              <li>
                <a href='#'>{kids}</a>
              </li>
            )}
            {!adoult ? null : (
              <li>
                <a href='#'>{adoult}</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
