import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
  {
    name: 'Alimentação',
    population: 215,
    color: '#FF6384',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
  {
    name: 'Transporte',
    population: 120,
    color: '#36A2EB',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
  {
    name: 'Outros',
    population: 75,
    color: '#FFCE56',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
];

export default function GraphPizza() {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth - 32} // largura com base no padding horizontal (16 + 16)
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        hasLegend={true}
        center={[0, 0]}
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center', // centraliza o gráfico horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});