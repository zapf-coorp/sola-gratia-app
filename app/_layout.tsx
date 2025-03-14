import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Início" }} />
      <Drawer.Screen name="devocional" options={{ title: "Devocional" }} />
      <Drawer.Screen name="oracao" options={{ title: "Oração" }} />
    </Drawer>
  );
}
