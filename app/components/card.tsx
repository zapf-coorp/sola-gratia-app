// app/components/Card.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  GestureResponderEvent,
} from "react-native";
import { RelativePathString, useRouter } from "expo-router";

interface ICard {
  id: number;
  title: string;
  screen: string;
  image: any; // Usando any, pois o require é um tipo específico
}

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const router = useRouter();

  const handlePress = (event: GestureResponderEvent) => {
    if (card.screen !== "/") {
      router.push(`/${card.screen}` as RelativePathString);
    } else {
      console.warn("Screen not found");
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <ImageBackground
        source={card.image}
        style={styles.cardImage}
        imageStyle={styles.cardImageStyle}
      >
        <Text style={styles.cardText}>{card.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "45%",
    height: 200,
    margin: 8,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "2px 2px 3.14px rgba(0, 0, 0, 0.25)",
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
});

export default Card;
