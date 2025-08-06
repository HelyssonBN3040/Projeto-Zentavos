import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fefefe;
  padding: 40px 20px 0;
  gap: 20px;
`;

export const Header = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #333;
`;

export const Card = styled.TouchableOpacity`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  shadow-radius: 5px;
  elevation: 3;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 6px;
`;

export const Balance = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2d2d2d;
`;

export const Amount = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const HalfCard = styled.View`
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  shadow-radius: 5px;
  elevation: 3;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  color: #444;
`;

export const ScrollList = styled.ScrollView`
  flex: 1;
`;

export const TransactionItem = styled.View`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  shadow-color: #000;
  shadow-opacity: 0.04;
  shadow-offset: 0px 1px;
  shadow-radius: 2px;
  elevation: 1;
`;

export const TransactionLabel = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #333;
`;

export const TransactionDate = styled.Text`
  font-size: 13px;
  color: #888;
`;

export const TransactionAmount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #c62828;
  align-self: center;
`;
