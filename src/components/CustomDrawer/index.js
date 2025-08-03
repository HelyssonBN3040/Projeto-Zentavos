// components/CustomDrawerContent.js
import { View, Text, Image, StyleSheet } from 'react-native';
import React, { version } from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' }} // ou use uma imagem local
                    style={styles.avatar}
                />
                <Text style={styles.name}>João Silva</Text>
                <Text style={styles.subtitle}>Zentavos</Text>
            </View>

            <View style={styles.items}>
                <DrawerItem
                    label="Dashboard"
                    icon={({ color, size }) => <Ionicons name="grid-outline" size={size} color={color} />}
                    onPress={() => props.navigation.navigate("Tabs", { screen: "Dashboard" })}
                />
                <DrawerItem
                    label="Nova Transação"
                    icon={({ color, size }) => <Feather name="plus" size={size} color={color} />}
                    onPress={() => props.navigation.navigate("Tabs", { screen: "Nova Transação" })}
                />
                <DrawerItem
                    label="Transações"
                    icon={({ color, size }) => <MaterialIcons name="receipt-long" size={size} color={color} />}
                    onPress={() => props.navigation.navigate("Tabs", { screen: "Transações" })}
                />
                {/* <DrawerItem
          label="Relatórios"
          icon={({ color, size }) => <Feather name="bar-chart-2" size={size} color={color} />}
          onPress={() => props.navigation.navigate("Tabs", { screen: "Nova Transação" })}
        /> */}
                <DrawerItem
                    label="Configurações"
                    icon={({ color, size }) => <Feather name="settings" size={size} color={color} />}
                    onPress={() => props.navigation.navigate("Tabs", { screen: "Configuração" })}
                />
                <DrawerItem
                    label="Sair"
                    icon={({ color, size }) => <AntDesign name="logout" size={size} color={color} />}
                    onPress={() => console.log('Logout')}
                />
            </View>
            <View style={{
                height: 500,
                justifyContent: "flex-end",
                alignItems: "center"

            }}>
                <Text
                    style={{
                        color: "black"
                    }}
                >
                    Versão do app: 1.0.0
                </Text>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { alignItems: 'center', marginVertical: 30 },
    avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
    name: { fontSize: 18, fontWeight: 'bold' },
    subtitle: { fontSize: 14, color: 'gray' },
   
});
