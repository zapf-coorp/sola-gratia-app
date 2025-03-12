import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="devocional" options={{ title: "Devocional" }} />
    </Stack>
  );
}
