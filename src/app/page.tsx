import { Header } from '@/components/Header/Header';
import { About } from '@/components/HomePage/About/About';
import { Contacts } from '@/components/HomePage/Contacts/Contacts';
import { Gallery } from '@/components/HomePage/Gallery/Gallery';
import { Hero } from '@/components/HomePage/Hero/Hero';
import { Prices } from '@/components/HomePage/Prices/Prices';
import { Products } from '@/components/HomePage/Products/Products';

import { homeHeader } from '@/store/store';

export default function Home() {
  return (
    <>
      <Header {...homeHeader} />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Prices />
      <Contacts />
    </>
  );
}
