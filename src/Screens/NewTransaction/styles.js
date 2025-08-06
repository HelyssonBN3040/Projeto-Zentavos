import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
  formGroup: {
    gap: 25,
  },
  inputContainer: {
    width: 300,
    height: 52,
    backgroundColor: '#f4f4f2',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  labelText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  rightSymbol: {
    fontSize: 16,
    color: '#999',
  },
  addButton: {
    width: 300,
    height: 60,
    backgroundColor: '#43B38E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
