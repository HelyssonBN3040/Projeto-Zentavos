import { StyleSheet, Text, View, Button } from 'react-native';
import { ContainerMain } from '../../Style/index';
import GraphPizza from '../../components/GraphPizza';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Olá, User</Text>
      <View>
        <View>
          <Text>Receitas</Text>
          <Text>R$ 3.000,00</Text>
        </View>
        <View>
          <Text>Despesas</Text>
          <Text>R$ 1.200,00</Text>
        </View>
      </View>
      <View>
        <Text>Despesas por categoria</Text>
        <View>
          <GraphPizza />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(60, 20.00%, 98.00%)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20

  },
});
