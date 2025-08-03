import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F3',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  cardDate: {
    fontSize: 14,
    color: '#777',
  },
});