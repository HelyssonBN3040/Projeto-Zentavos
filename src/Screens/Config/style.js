import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: hsl(60, 20%, 98%);
  padding: 20px;
`;

export const Section = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Item = styled.TouchableOpacity`
  padding-vertical: 10px;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const SwitchRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
  border-top-width: 1px;
  border-top-color: #eee;
`;
