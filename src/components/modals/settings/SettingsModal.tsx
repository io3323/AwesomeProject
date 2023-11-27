import React, {FC} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {ISettingsModal} from './types.settings';
import {BrandsCard} from '../../cards/brands/BrandsCard';
import {sectionType} from '../../../helper/mock';
import {SectionsCard} from '../../cards/sections/SectionsCard';

export const SettingsModal: FC<ISettingsModal> = ({
  modalVisible,
  setModalVisible,
  brands,
  selectBrand,
  setSelectBrand,
  sectionNum,
  setSectionNum,
}) => {
  const renderItem = ({item}) => {
    return (
      <BrandsCard
        {...item}
        key={item.brandId}
        selectBrand={selectBrand}
        setSelectBrand={setSelectBrand}
      />
    );
  };
  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.headerContainer}>
          <Text>Close</Text>
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <FlatList
            horizontal={true}
            style={styles.flatContainer}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            data={brands}
            renderItem={renderItem}
            keyExtractor={item => `${item.brandId}`}
          />
        </View>
        <View style={styles.titleBrandContainer}>
          <Text style={styles.titleCategory}>
            Выбранная категория: {selectBrand.brandName || 'Не указано'}{' '}
          </Text>
        </View>
        <View style={styles.titleSectionContainer}>
          <Text style={styles.titleCategory}>Выберите тип сетки: </Text>
        </View>
        <View style={styles.sectionContainer}>
          {sectionType.map(({img, id}) => (
            <SectionsCard
              key={id}
              img={img}
              id={id}
              sectionNum={sectionNum}
              setSectionNum={setSectionNum}
            />
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};
