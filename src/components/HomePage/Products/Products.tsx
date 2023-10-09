import Image from 'next/image';

import product1 from '../../../../public/images/product1.png';
import product3 from '../../../../public/images/product3.png';
import product4 from '../../../../public/images/product4.png';
import styles from './Products.module.scss';

const imgStyle = {
  maxWidth: '700px',
  maxHeight: '700px',
  width: '100%',
  height: '100%',
  borderRadius: '60px',
};

const imgStyle2 = {
  maxWidth: '700px',
  maxHeight: '700px',
  width: '100%',
  height: '100%',
  borderRadius: '240px 60px 60px 60px',
  filter: 'grayscale(70%)',
};

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.products__wrap}>
        <div>
          <h3>Супер мягкость и уникальная поддержка</h3>
          <p>
            Наши матрасы – идеальное сочетание упругости и мягкости благодаря
            передовым материалам и использованию передовых технологий. Все для
            вашего благополучия и замечательного сна!
          </p>
        </div>
        <Image src={product1} alt='product1' style={imgStyle} />
      </div>
      <div className={styles.products__wrap}>
        <div>
          <h3>Коллекция разнообразных моделей</h3>
          <p>
            Мы предлагаем ортопедические матрасы на любой вкус и безупречного
            качества. В нашем ассортименте вы найдёте идеальный матрас для вашей
            спины, будь вы поклонник мягких или упругих поверхностей.
          </p>
        </div>
        <Image src={product4} alt='product2' style={imgStyle2} />
      </div>
      <div className={styles.products__wrap}>
        <div>
          <h3>Лучшее сочетание цены и качества</h3>
          <p>
            Наши матрасы отвечают высоким стандартам, при этом, мы делаем всё
            возможное, чтобы сделать их доступными для каждого.
          </p>
        </div>
        <Image src={product3} alt='product3' style={imgStyle} />
      </div>
    </section>
  );
};

export { Products };
