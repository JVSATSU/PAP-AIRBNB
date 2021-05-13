import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchbutton: {
    backgroundColor: 'white',
    height: 60,
    width: Dimensions.get('screen').width - 50,
    borderRadius: 60,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    top: 30,
  },
  searchbuttontext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
