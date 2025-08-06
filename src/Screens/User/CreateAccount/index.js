import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Feather from '@expo/vector-icons/FontAwesome5';
import { db } from '../../../Firebase/firebaseConnection';
import { collection, addDoc } from 'firebase/firestore';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';

export default function CreateAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleRegister() {
    try {
      await addDoc(collection(db, 'users'), {
        Nome: name,
        Email: email,
      });
      Alert.alert('Usuário criado com sucesso!');
      setName('');
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.ContainerHeader}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/iconSplash.png')}
        />
        <Text style={styles.title}>Zentavos</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.InputCreateUser}
          onChangeText={(text) => setName(text)}
          placeholder="Nome Completo"
        />
        <TextInput
          style={styles.InputCreateUser}
          onChangeText={(text) => setEmail(text)}
          placeholder="E-mail"
          inputMode="email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.InputCreateUser}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
        />

        <View style={styles.passwordToggle}>
          <Checkbox
            value={mostrarSenha}
            onValueChange={(newValue) => setMostrarSenha(newValue)}
            color={mostrarSenha ? '#43B38E' : undefined}
          />
          <Text style={styles.toggleText}>
            {mostrarSenha ? 'Esconder Senha' : 'Mostrar Senha'}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.InputLogin}>
        <Text style={styles.TextButtonLogin}>Criar Conta</Text>
      </TouchableOpacity>

      <View style={styles.loginRedirect}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.accessText}>Acesse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
