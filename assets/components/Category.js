import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Category = ({ title, color, image }) => (
  <View style={[styles.category, { backgroundColor: color }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  category: {
    width: "65%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 15, // đẹp hơn
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
    marginRight: 10,
  },

  text: {
    color: "#3E423F",
    fontFamily: "Gilroy-SemiBold", // 🔥 vì weight 600
    fontSize: 16, // hoặc dùng Gilroy-SemiBold
  },
});
export default Category;
