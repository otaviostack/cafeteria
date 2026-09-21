import { StyleSheet, Text, View } from "react-native";

type coffeeCardProps = {
  name: string;
  description: string;
  price: string;
};

export default function coffeeCard({ name, description, price }: coffeeCardProps) {
  return (
    <View style={styles.miniFeatured}>
      <Text style={styles.produtoTitle}>{name}</Text>
      <Text style={styles.produtoDescription}>{description}</Text>
      <Text style={styles.produtoPrice}>{price}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  miniFeatured: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    width: "48%",
    marginBottom: 16,
  },

  produtoTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  produtoDescription: {
    fontSize: 12,
    marginTop: 4
  },

  produtoPrice: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    color: "#c67c4e"
  },
})