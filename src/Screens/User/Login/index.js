import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import Feather from "@expo/vector-icons/FontAwesome5"
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", alignItems: "center", }}>
        <Image
          style={{ width: 120, height: 120, }}
          source={require("../../../../assets/logoZen.png")}
        />
        <Text style={{ fontSize: 35, fontWeight: "bold", }}>Zentavos</Text>
      </View>
      <View style={{ gap: 15, }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="text"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
        />
        <View style={{ display: "flex", flexDirection: "row", marginLeft: 4, gap: 5, }}>
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
      <View style={{ display: 'flex', alignItems: 'center', gap: 10, }}>
        <TouchableOpacity
          style={styles.InputLogin}

        >
          <Text style={styles.TextButtonLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={false} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ fontSize: 20, color: '#43B38E', }}>Criar Conta</Text>
        </TouchableOpacity>
        {/* <View style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',}}>
          <View style={{width:100,backgroundColor:'#dfdfe4', height:2,}}></View>
          <Text style={{marginLeft:5,marginRight:5, color:'#5f666f',}}>Ou</Text>
          <View style={{width:100,backgroundColor:'#dfdfe4', height:2,}}></View>
        </View> */}
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
    gap: 60,
  },
  input: {
    width: 300,
    height: 50,
    padding: 15,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#E9EDF0",
  },
  InputLogin: {
    width: 280,
    height: 60,
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
