import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item, text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate(text)}
        >
          <Ionicons name="add" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    borderWidth: 1,
    gap: 10,
    borderColor: "#E2E2E2",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",

    paddingVertical: 30,
  },
  productName: {
    color: "#181725",
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.1,
    marginTop: 5,
  },
  desc: {
    color: "#7C7C7C",
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    lineHeight: 18,
  },
  price: {
    color: "#181725",
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
  addBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#53B175",
    borderRadius: 17,
    padding: 10,
  },
});
export default ProductCard;
