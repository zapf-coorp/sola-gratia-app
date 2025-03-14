import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function CustomDrawerContent() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Menu
      </Text>
      <Link href="/" style={{ marginBottom: 10 }}>
        Início
      </Link>
      <Link href="../devocional" style={{ marginBottom: 10 }}>
        Devocional
      </Link>
      <Link href="../oracao" style={{ marginBottom: 10 }}>
        Oração
      </Link>
    </View>
  );
}
