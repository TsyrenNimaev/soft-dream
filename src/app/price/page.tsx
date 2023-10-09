import { Header } from '@/components/Header/Header';
import { PriceHero } from '@/components/PricePage/PriceHero/PriceHero';
import { PriceAbout } from '@/components/PricePage/PriceAbout/PriceAbout';
import { Kids } from '@/components/PricePage/Kids/Kids';
import { Adults } from '@/components/PricePage/Adults/Adults';

import { pricesHeader } from '@/store/store';

export default function Price() {
  return (
    <>
      <Header {...pricesHeader} />
      <PriceHero />
      <PriceAbout />
      <Kids />
      <Adults />
    </>
  );
}

export { Price };
