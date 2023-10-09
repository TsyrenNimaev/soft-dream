export interface IHeaderType {
  title?: string;
  about: string;
  backLink?: string;
  products?: string;
  prices?: string;
  contacts?: string;
  kids?: string;
  adoult?: string;
}

// interface IdetailPriceList {
//   id: number;
//   size: string;
//   price: string;
//   addition: string;
//   outMaterial: string;
//   innerMaterial: string;
//   springBlock?: string;
//   perimeter?: string;
//   addMaterial?: string;
// } 

// export interface IPriceCardType {
//   defualtPriceCard: IdetailPriceList[];
//   withoutCoconutCoir: IdetailPriceList[];
//   addedCoconutCoirOnOneSide: IdetailPriceList[];
//   addedCoconutCoirOnBothSides: IdetailPriceList[];
// }

interface IIdSizeType {
  lengthMattress: string;
  widthMattress: number;
  heightMattress?: number;
}

interface IMaterialType {
  outMaterial: string;
  innerMaterial: string;
  coconut_coir: string;
  springBlock?: string;
  perimeter?: string;
  addMaterial?: string;
}

export interface IDataType {
  id: number;
  id_name: string;
  id_size: IIdSizeType;
  size: string;
  price: string;
  material: IMaterialType;
}

export interface IOptionsSelect {
  value: string;
  label: string;
}