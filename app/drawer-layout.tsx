import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Menu
      </Text>
      <Link href="/" style={{ marginBottom: 10 }}>
        Início
      </Link>
      <Link href="/screens/devocional" style={{ marginBottom: 10 }}>
        Devocional
      </Link>
      <Link href="/screens/oracao" style={{ marginBottom: 10 }}>
        Oração
      </Link>
    </View>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
        <Drawer.Screen
          name="index"
          options={{ title: "Início" }}
          component={() => (
            <View>
              <Text>Início</Text>
            </View>
          )}
        />
        <Drawer.Screen
          name="devocional"
          options={{ title: "Devocional" }}
          component={() => (
            <View>
              <Text>Devocional</Text>
            </View>
          )}
        />
        <Drawer.Screen
          name="oracao"
          options={{ title: "Oração" }}
          component={() => (
            <View>
              <Text>Oração</Text>
            </View>
          )}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}
