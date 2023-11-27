import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const SectionsCard = ({img, id, sectionNum, setSectionNum}) => {
  return (
    <TouchableOpacity
      style={
        sectionNum === id ? styles.mainActiveContainer : styles.mainContainer
      }
      onPress={() => setSectionNum(id)}>
      <Image style={styles.img} source={img} />
    </TouchableOpacity>
  );
};
