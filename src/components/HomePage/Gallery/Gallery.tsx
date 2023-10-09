import Image from 'next/image';

import gallery6 from '../../../../public/images/gallery6.png';
import gallery3 from '../../../../public/images/gallery3.jpg';
import gallery4 from '../../../../public/images/gallery4.jpg';
import gallery5 from '../../../../public/images/gallery5.png';
import styles from './Gallery.module.scss';

const galleryImg1 = {
  maxWidth: '50%',
  maxHeight: '700px',
  marginRight: '20px',
  borderRadius: '60px',
  filter: 'grayscale(60%) sepia(40%)',
};

const galleryImg2 = {
  maxWidth: '25%',
  maxHeight: '340px',
  marginRight: '20px',
  borderRadius: '60px',
  filter: 'sepia(50%)',
};

const galleryImg3 = {
  maxWidth: '25%',
  maxHeight: '340px',
  borderRadius: '60px',
};

const galleryImg4 = {
  maxWidth: '48.5%',
  maxHeight: '340px',
  borderRadius: '60px',
  filter: 'sepia(50%)',
};

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__decoration}>
        <span></span>
        <span></span>
      </div>
      <h3>Сделайте правильный выбор</h3>
      <div className={styles.gallery__wrap}>
        <Image src={gallery4} alt='gallery4' style={galleryImg1} />
        <Image src={gallery3} alt='gallery3' style={galleryImg2} />
        <Image src={gallery5} alt='gallery5' style={galleryImg3} />
        <Image src={gallery6} alt='gallery6' style={galleryImg4} />
      </div>
    </section>
  );
};

export { Gallery };
