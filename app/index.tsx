import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { Cards } from "./shared/cards";

export default function HomeScreen() {
  const router = useRouter();
  const cards = Cards;

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
                if (card.screen !== "/") {
                  router.push(`/${card.screen}` as RelativePathString);
                } else {
                  console.warn("Screen not found");
                }
              }}
            >
              <ImageBackground
                source={card.image}
                style={styles.cardImage}
                imageStyle={styles.cardImageStyle}
              >
                <Text style={styles.cardText}>{card.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Inferior */}
        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="home" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="settings" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/")}>
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
    margin: 8,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "2px 2px 3.14px rgba(0, 0, 0, 0.25)",
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
  },
  cardImageStyle: {
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  bottomMenu: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  }
});
