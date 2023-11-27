import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {ContextType} from './types';

export const ContextTitle: FC<ContextType> = ({title, description}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
