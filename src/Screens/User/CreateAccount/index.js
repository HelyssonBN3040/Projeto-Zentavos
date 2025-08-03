import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import Feather from "@expo/vector-icons/FontAwesome5"
import { db } from '../../../Firebase/firebaseConnection';
import { collection, addDoc } from 'firebase/firestore';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function CreateAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  async function handleRegister() {

    await addDoc(collection(db, "users"), {
      Nome: name,
      Email: email,
    })
      .then(() => {
        Alert.alert("Usuario criado com sucesso!");
        setName('');
        setEmail('');
      })
      .catch((err) => console.log(err));
  }


  return (
    <View style={styles.container}>
      <View style={styles.ContainerHeader}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require('../../../../assets/iconSplash.png')}
        />
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#2d4549", }}>Zentavos</Text>
      </View>
      <View style={{ display: "flex", justifyContent: "center", gap: 15, }}>
        <TextInput
          style={styles.InputCreateUser}
          onChangeText={(text) => setName(text)}
          placeholder='Nome Completo'
          require
        />
        <TextInput
          style={styles.InputCreateUser}
          onChangeText={(text) => setEmail(text)}
          placeholder='E-mail'
          inputMode='email'
          keyboardType='email-address'
          require
        />
        <TextInput
          style={styles.InputCreateUser}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
        />
        <View style={{ display: "flex", flexDirection: "row", gap: 5, marginLeft: 4, }}>
          <Checkbox
            value={mostrarSenha}
            onValueChange={(newValue) => {
              setMostrarSenha(newValue);

            }}
            color={mostrarSenha ? '#43B38E' : undefined}
          />
          <Text
            style={{ color: '#43B38E', }}
          >
            {mostrarSenha ? "Esconder Senha" : "Mostrar Senha"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRegister}
        style={styles.InputLogin}
      >
        <Text style={styles.TextButtonLogin}>Criar Conta</Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row", }}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity
          style={{ marginLeft: 3, }}
          activeOpacity={false}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: '#43B38E' }}>Acesse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: "center",
    gap: 55,
  },
  ContainerHeader: {
    display: "flex",
    alignItems: "center",

  },
  InputCreateUser: {
    width: 300,
    height: 50,
    padding: 15,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#E9EDF0",

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
    color: "white",
    fontWeight: "bold",

  },

});
