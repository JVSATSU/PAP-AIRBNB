import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
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
  descricaol: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});
export default styles;
