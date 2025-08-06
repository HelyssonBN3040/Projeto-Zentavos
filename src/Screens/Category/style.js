import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;

export const StyledInput = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 8px 12px;
  background-color: #fff;
  font-size: 16px;
  flex: 1;
`;

export const ItemContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #e5e5e5;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
  elevation: 1;
`;

export const CategoryName = styled.Text`
  font-size: 16px;
  flex: 1;
  color: #333;
`;

export const EditButton = styled.TouchableOpacity`
  background-color: #43b38e;
  padding: 6px 10px;
  border-radius: 8px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #ef4444;
  padding: 6px 10px;
  border-radius: 8px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #10b981;
  padding: 6px 12px;
  border-radius: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #43b38e;
  padding: 10px 14px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const EmptyText = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: #666;
  font-style: italic;
`;
