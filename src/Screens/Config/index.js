import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default function ConfigScreen() {
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [budgetAlerts, setBudgetAlerts] = useState(true);

    return (
        <ScrollView style={styles.container}>

            {/* Seção: Conta */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Conta</Text>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Alterar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Sair da Conta</Text>
                </TouchableOpacity>
            </View>

            {/* Seção: Preferências */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferências</Text>
                <View style={styles.switchRow}>
                    <Text style={styles.itemText}>Tema</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        trackColor={{ false: '#ccc', true: '#43B38E' }}
                        thumbColor={darkMode ? '#fff' : '#fff'}
                    />
                </View>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Idioma</Text>
                </TouchableOpacity>
            </View>

            {/* Seção: Notificações */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Notificações</Text>
                <View style={styles.switchRow}>
                    <Text style={styles.itemText}>Notificações</Text>
                    <Switch
                        value={notifications}
                        onValueChange={setNotifications}
                        trackColor={{ false: '#ccc', true: '#43B38E' }}
                        thumbColor={notifications ? '#fff' : '#fff'}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.itemText}>Alertas de Orçamento</Text>
                    <Switch
                        value={budgetAlerts}
                        onValueChange={setBudgetAlerts}
                        trackColor={{ false: '#ccc', true: '#43B38E' }}
                        thumbColor={budgetAlerts ? '#fff' : '#fff'}
                    />
                </View>
            </View>

            {/* Seção: Privacidade */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Privacidade</Text>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Termos de Uso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Política de Privacidade</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(60, 20.00%, 98.00%)',
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
});
