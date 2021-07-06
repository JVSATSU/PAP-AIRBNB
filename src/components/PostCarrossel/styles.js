import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  quartos: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  descricao: {
    fontSize: 18,
    lineHeight: 26,
  },
  preco: {
    fontSize: 18,
    marginVertical: 10,
  },
  apreco: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  npreco: {
    fontWeight: 'bold',
  },
  precot: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
export default styles;