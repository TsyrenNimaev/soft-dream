import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__decoration}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.contacts__container}>
        <h3>Свяжитесь с нами сегодня, и мы ответим быстро.</h3>
        <p className={styles.contacts__container__paragraph}>
          Если вам нужна профессиональная помощь, вы всегда можете связаться с
          нами. Быстро, легко и без заблуждений!
        </p>
        <div>
          <h4>Наши контакты</h4>
          <div className={styles.contacts__container__wrap}>
            <div className={styles.contacts__container__wrap__left}>
              <p>
                Свяжитесь с нами через предложенные способы и получите
                молниеносный ответ!
              </p>
            </div>
            <div className={styles.contacts__container__wrap__right}>
              <ul>
                <li>Телефон</li>
                <li>Электронная почта</li>
                <li>Адрес магазина</li>
                <li>График работы</li>
              </ul>
              <ul>
                <li>
                  <a href='tel:+79085937375'>+7 (908) 593-73-75</a>
                </li>
                <li>
                  <a href='mailto:softdream@inbox.ru'>softdream@inbox.ru</a>
                </li>
                <li>пр. Автомобилистов 1б ст.2, Улан-Удэ</li>
                <li>Пн-Вс: 10:00 - 20:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contacts };
