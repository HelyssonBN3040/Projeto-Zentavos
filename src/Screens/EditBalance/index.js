import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EditBalance() {
  const [balance, setBalance] = useState('');
  const navigation = useNavigation();


  const handleSaveBalance = () => {
    // Aqui você pode salvar o saldo em um estado global, banco de dados ou AsyncStorage
    console.log('Saldo salvo:', balance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar saldo inicial</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor do saldo"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={balance}
        onChangeText={setBalance}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveBalance}>
        <Text style={styles.buttonText}>Salvar saldo</Text>
      </TouchableOpacity>
      <View>
        <Text></Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#43B38E',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#43B38E',
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    color: '#333',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#43B38E',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
