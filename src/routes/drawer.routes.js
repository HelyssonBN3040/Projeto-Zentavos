import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import TabNavigation from './Tab.routes';
import CustomDrawerContent from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
        return {
          headerTitleAlign: 'center',
          headerTitle: routeName,
        };
      }}
    >
      <Drawer.Screen name="Tabs" component={TabNavigation} />
    </Drawer.Navigator>
  );
}