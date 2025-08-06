import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';

const transactions = [
  { id: '1', title: 'Groceries', amount: '-$75,00', date: 'Apr 20, 2024' },
  { id: '2', title: 'Restaurant', amount: '-$45,00', date: 'Apr 16, 2024' },
  { id: '3', title: 'Clothing', amount: '-$120,00', date: 'Apr 15, 2024' },
  { id: '4', title: 'Restaurant', amount: '-$36,00', date: 'Apr 17, 2024' },
  { id: '5', title: 'Cab', amount: '-$20,00', date: 'Apr 17, 2024' },
];

export default function Transaction() {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}
