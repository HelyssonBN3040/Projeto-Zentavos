import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoContainer,
  Logo,
  LogoText,
  InputArea,
  Input,
  ShowPasswordContainer,
  ShowPasswordText,
  ButtonsContainer,
  LoginButton,
  LoginButtonText,
  CreateAccountText
} from './styles';

export default function Login() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Logo source={require("../../../../assets/logoZen.png")} />
        <LogoText>Zentavos</LogoText>
      </LogoContainer>

      <InputArea>
        <Input placeholder="Email" keyboardType="text" />

        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />

        <ShowPasswordContainer>
          <Checkbox
            value={mostrarSenha}
            onValueChange={setMostrarSenha}
            color={mostrarSenha ? '#43B38E' : undefined}
          />
          <ShowPasswordText>
            {mostrarSenha ? "Esconder Senha" : "Mostrar Senha"}
          </ShowPasswordText>
        </ShowPasswordContainer>
      </InputArea>

      <ButtonsContainer>
        <LoginButton>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        <TouchableOpacity activeOpacity={false} onPress={() => navigation.navigate('Cadastro')}>
          <CreateAccountText>Criar Conta</CreateAccountText>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
}
