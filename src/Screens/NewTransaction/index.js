import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5, Entypo } from '@expo/vector-icons';
import DatePicker from '../../components/DateTimerPicker';

export default function NewTransaction() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fefefc', alignItems: 'center', justifyContent: 'center', gap: 80 }}>

      <View style={{ gap: 25 }}>
        
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
        <DatePicker/>

        {/* Category Field */}
        <TouchableOpacity style={styles.inputContainer}>
          <Entypo name="circle" size={20} color="#43B38E" style={styles.icon} />
          <Text style={styles.labelText}>Categoria</Text>
          <Entypo name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

        {/* Notes Field */}
        <TextInput
          placeholder="Note"
          multiline
          textAlignVertical="top"
          style={styles.textArea}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  inputContainer: {
    width: 300,
    height: 52,
    backgroundColor: '#f4f4f2',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  labelText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  rightSymbol: {
    fontSize: 16,
    color: '#999',
  },
  textArea: {
    width: 300,
    height: 100,
    backgroundColor: '#f4f4f2',
    borderRadius: 13,
    padding: 12,
    fontSize: 16,
    color:"black",
  },
  addButton: {
    width: 300,
    height: 60,
    backgroundColor: '#43B38E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
};
