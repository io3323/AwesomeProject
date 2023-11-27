import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainHeaderContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: '5%',
  },
  mainHeaderTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  image: {
    width: 30,
    height: 30,
  },
});
