import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {settingsIcons} from '../../assets/requared';
import {styles} from './styles';
import {HeaderComponent as HeaderComponentType} from './types.header';

export const HeaderComponent: FC<HeaderComponentType> = ({
  selectBrand,
  setSettingsModalVisible,
}) => {
  const handleOpenModal = () => {
    setSettingsModalVisible(true);
  };
  return (
    <View style={styles.mainHeaderContainer}>
      <Text style={styles.mainHeaderTitle}>Данные о машинах</Text>
      <View style={styles.mainContainer}>
        <Text>Выбранная категория: {selectBrand.brandName || 'All'}</Text>
        <TouchableOpacity onPress={handleOpenModal}>
          <Image style={styles.image} source={settingsIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
