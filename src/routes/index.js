import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {

    const usuarioLogado = true;
    return (
        <NavigationContainer>
            {usuarioLogado ? <DrawerRoutes /> : <StackRoutes />}
        </NavigationContainer>
    )
}