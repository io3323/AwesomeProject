import React, {FC} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useGetMoreInfoModelQuery} from '../../../redux/api';
import {styles} from './styles';
import {Loader} from '../../../UIKit/loader/Loader';
import {ContextTitle} from '../../../UIKit/context/ContextTitle';
import {MoreInfoType} from './types';

export const MoreInfoModal: FC<MoreInfoType> = ({
  modalVisible,
  setModalVisible,
  selectedId,
}) => {
  const {
    data: moreInfo,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useGetMoreInfoModelQuery(selectedId as number);

  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.headerContainer}>
          <Text>Close</Text>
        </TouchableOpacity>
        {!isLoadingCars && (
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.mainTitle}>Подробная информация</Text>
            </View>
            <View style={styles.textContainer}>
              <ContextTitle title={'Бранд'} description={moreInfo?.brand} />
              <ContextTitle
                title={'Объем'}
                description={moreInfo?.cargoCapacity}
              />
              <ContextTitle title={'Описание'} />
              <ContextTitle description={moreInfo?.description} />
              <ContextTitle
                title={'Количетсво литров на метр'}
                description={moreInfo?.fuelEfficiency}
              />
              <ContextTitle title={'Модель'} description={moreInfo?.model} />
              <ContextTitle title={'Спецификации:'} />
              {moreInfo?.safetyFeatures.map((data, index) => (
                <ContextTitle key={index} title={data} />
              ))}
            </View>
          </View>
        )}
        {!!isLoadingCars && <Loader />}
      </SafeAreaView>
    </Modal>
  );
};
