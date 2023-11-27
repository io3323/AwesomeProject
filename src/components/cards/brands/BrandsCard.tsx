import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {BrandsType} from './types';

export const BrandsCard: FC<BrandsType> = ({
  brandId,
  brandName,
  selectBrand,
  setSelectBrand,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        setSelectBrand(
          brandId === selectBrand.brandId
            ? {}
            : {brandId: brandId, brandName: brandName},
        )
      }
      style={
        brandId === selectBrand.brandId
          ? styles.activeCardContainer
          : styles.cardContainer
      }>
      <Text>{brandName}</Text>
    </TouchableOpacity>
  );
};
