import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "./components/custom-drawer-content";


export default function Layout() {
  return (
    <Drawer drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name="index"
        options={{ title: "Início", headerShown: true }}
      />
      <Drawer.Screen
        name="devocional"
        options={{ title: "Devocional", headerShown: true }}
      />
      <Drawer.Screen
        name="oracao"
        options={{ title: "Oração", headerShown: true }}
      />
    </Drawer>
  );
}
