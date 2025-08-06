import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const LogoText = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;

export const InputArea = styled.View`
  gap: 15px;
`;

export const Input = styled.TextInput`
  width: 300px;
  height: 50px;
  padding: 15px;
  border-radius: 8px;
  font-size: 15px;
  border: 2px solid #e9edf0;
`;

export const ShowPasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-left: 4px;
`;

export const ShowPasswordText = styled.Text`
  color: #43b38e;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  gap: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 280px;
  height: 60px;
  background-color: #43b38e;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const LoginButtonText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const CreateAccountText = styled.Text`
  font-size: 20px;
  color: #43b38e;
`;
