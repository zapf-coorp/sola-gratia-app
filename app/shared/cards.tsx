interface ICard {
  id: number;
  title: string;
  screen: string;
  image: string;
}

export const Cards: ICard[] = [
  {
    id: 1,
    title: "Devocional",
    screen: "devocional",
    image: require("../../assets/images/default_card.jpg"),
  },
  {
    id: 2,
    title: "Oração",
    screen: "oracao",
    image: require("../../assets/images/default_card.jpg"),
  },
  {
    id: 3,
    title: "Item 3",
    screen: "/",
    image: require("../../assets/images/default_card.jpg"),
  },
  {
    id: 4,
    title: "Item 4",
    screen: "/",
    image: require("../../assets/images/default_card.jpg"),
  },
];

export default Cards;
