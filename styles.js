import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
  }
  
});
