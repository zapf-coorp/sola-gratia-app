import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import React from "react";



export default function HomeScreen() {
  const router = useRouter();
  const cards = [
    { id: 1, title: "Devocional", screen: "./screens/devocional" },
    { id: 2, title: "Oração", screen: "./screens/oracao" },
    { id: 3, title: "Item 3", screen: "nonono" },
    { id: 4, title: "Item 4", screen: "nonono" },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.title}> Sola Gratia </Text>

        {/* Cards Centrais */}
        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => {
                if (card.screen !== "nonono") {
                  router.push(`/${card.screen}` as RelativePathString);
                } else {
                  console.warn("Screen not found");
                }
              }}
            >
              <Text style={styles.cardText}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Inferior */}
        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <Ionicons name="home" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/')}>
            <Ionicons name="settings" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/')}>
            <Ionicons name="person" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 30,
    width: "auto",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 0,
  },
  card: {
    width: "45%",
    height: 200,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    margin: 8,
    padding: 8,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "2px 2px 3.14px rgba(0, 0, 0, 0.25)",
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    textAlign: "center",
  },
  bottomMenu: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
