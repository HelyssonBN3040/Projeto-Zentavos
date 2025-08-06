import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5, Entypo } from '@expo/vector-icons';
import DatePicker from '../../components/DateTimerPicker';
import styles from './styles';

export default function NewTransaction() {
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        {/* Amount Field */}
        <View style={styles.inputContainer}>
          <FontAwesome5 name="dollar-sign" size={20} color="#43B38E" style={styles.icon} />
          <TextInput
            placeholder="Valor"
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={styles.rightSymbol}>$</Text>
        </View>

        {/* Date Field */}
        <DatePicker />

        {/* Category Field */}
        <TouchableOpacity style={styles.inputContainer}>
          <Entypo name="list" size={20} color="#43B38E" style={styles.icon} />
          <Text style={styles.labelText}>Categoria</Text>
          <Entypo name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
