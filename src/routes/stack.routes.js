import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/User/Login';
import CreateAccount from '../Screens/User/CreateAccount';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={CreateAccount} />
        </Stack.Navigator>
    );
}