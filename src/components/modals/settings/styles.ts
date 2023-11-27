import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    height: '10%',
  },
  flatListContainer: {
    height: '5%',
    gap: 20,
    marginVertical: 10,
    paddingHorizontal: 30,
  },
  flatContainer: {
    height: '100%',
  },
  titleBrandContainer: {
    paddingHorizontal: '6%',
  },
  titleCategory: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '5%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  titleSectionContainer: {
    paddingHorizontal: '6%',
    paddingVertical: 20,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: '5%',
  },
});
