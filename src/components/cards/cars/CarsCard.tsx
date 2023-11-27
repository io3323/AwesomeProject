import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ContextTitle} from '../../../UIKit/context/ContextTitle';

export const CarsCard = ({
  id,
  model,
  year,
  engine,
  transmission,
  price,
  color,
  topSpeed,
  sectionNum,
  setSelectedId,
  setMoreInfoModalVisible,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedId(id);
        setMoreInfoModalVisible(true);
      }}
      style={[
        styles.main,
        {
          width: sectionNum === 1 ? '100%' : sectionNum === 2 ? '50%' : '25%',
          height: sectionNum === 1 ? 150 : sectionNum === 2 ? 120 : 120,
          marginVertical: sectionNum === 1 ? 40 : sectionNum === 2 ? 10 : 10,
          paddingHorizontal: sectionNum === 1 ? 20 : sectionNum === 2 ? 10 : 10,
        },
      ]}>
      <View style={styles.container}>
        <ContextTitle title={'Модель'} description={model} />
        <ContextTitle title={'Год выпуска'} description={year} />
        {sectionNum === 1 && (
          <ContextTitle title={'Двигатель'} description={engine} />
        )}
        {sectionNum === 1 && (
          <ContextTitle title={'Тип трансмисии'} description={transmission} />
        )}
        {sectionNum === 1 && (
          <ContextTitle
            title={'Максимальная скорость'}
            description={topSpeed}
          />
        )}
        <ContextTitle title={'Цена'} description={price} />
        <ContextTitle title={'Цвет'} description={color} />
      </View>
    </TouchableOpacity>
  );
};
