import {SelectTypeBrand} from '../../main/type.main';

export type BrandsType = {
  brandId: number;
  brandName: string;
  selectBrand: SelectTypeBrand | {};
  setSelectBrand: (brandId: number) => {};
};
