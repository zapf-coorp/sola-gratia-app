import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function OracaoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Vamos orar </Text>
      <Text style={styles.text}>
        Aqui você pode se conectar com Deus.
      </Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
