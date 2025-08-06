import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 55,
  },
  ContainerHeader: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2d4549',
  },
  form: {
    justifyContent: 'center',
    gap: 15,
  },
  InputCreateUser: {
    width: 300,
    height: 50,
    padding: 15,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#E9EDF0',
  },
  passwordToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    gap: 5,
  },
  toggleText: {
    color: '#43B38E',
  },
  InputLogin: {
    width: 300,
    height: 55,
    backgroundColor: '#43B38E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  TextButtonLogin: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  loginRedirect: {
    flexDirection: 'row',
  },
  accessText: {
    color: '#43B38E',
    marginLeft: 3,
  },
});
