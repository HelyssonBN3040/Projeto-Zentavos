import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Card,
  CardTitle,
  Balance,
  Amount,
  Row,
  SectionTitle,
  TransactionItem,
  TransactionLabel,
  TransactionDate,
  TransactionAmount,
  ScrollList,
  HalfCard,
} from './style';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>Olá, Helysson 👋</Header>

      <Card onPress={() => navigation.navigate('Editar Saldo')} activeOpacity={0.8}>
        <CardTitle>Saldo em conta</CardTitle>
        <Balance>R$ 5.000,00</Balance>
      </Card>

      <Row>
        <HalfCard style={{ backgroundColor: '#e0f7ec' }}>
          <CardTitle>Receitas</CardTitle>
          <Amount style={{ color: '#2e7d32' }}>R$ 3.000,00</Amount>
        </HalfCard>
        <HalfCard style={{ backgroundColor: '#fdecea' }}>
          <CardTitle>Despesas</CardTitle>
          <Amount style={{ color: '#c62828' }}>R$ 1.200,00</Amount>
        </HalfCard>
      </Row>

      <SectionTitle>Despesas por categoria</SectionTitle>

      <ScrollList contentContainerStyle={{ paddingBottom: 20 }}>
        {[...Array(5)].map((_, index) => (
          <TransactionItem key={index}>
            <React.Fragment>
              <TransactionLabel>Alimentação</TransactionLabel>
              <TransactionDate>Data: 01/01/2004</TransactionDate>
            </React.Fragment>
            <TransactionAmount>R$ 3.000,00</TransactionAmount>
          </TransactionItem>
        ))}
      </ScrollList>
    </Container>
  );
}
