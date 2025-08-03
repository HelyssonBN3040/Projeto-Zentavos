import React, { useState } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateSelected, setDateSelected] = useState(false);

    const onChange = (event, selectedDate) => {
        if (Platform.OS === 'android') setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
            setDateSelected(true);
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShow(true)}>
                <Feather name="calendar" size={20} color="#43B38E" style={styles.icon} />
                <Text style={styles.labelText}>
                    {dateSelected
                        ? date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
                        : 'Selecione uma data'}
                </Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                    onChange={onChange}
                />
            )}
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
        justifyContent: 'flex-start',
        gap: 12,
    },
    icon: {
        marginRight: 0,
    },
    labelText: {
        fontSize: 16,
    },
};
