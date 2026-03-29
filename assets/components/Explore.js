import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TabItem from "./TabItem";

const categories = [
  {
    id: "1",
    title: "Frash Fruits\n& Vegetable",
    image: require("../../assets/img/pd1.png"),
    bg: "#EEF7F1",
    border: "#53B175",
  },
  {
    id: "2",
    title: "Cooking Oil\n& Ghee",
    image: require("../../assets/img/pd2.png"),
    bg: "#FFF6ED",
    border: "#F8A44C",
  },
  {
    id: "3",
    title: "Meat & Fish",
    image: require("../../assets/img/pd3.png"),
    bg: "#FDE8E4",
    border: "#F7A593",
  },
  {
    id: "4",
    title: "Bakery & Snacks",
    image: require("../../assets/img/pd4.png"),
    bg: "#F4EBF7",
    border: "#D3B0E0",
  },
  {
    id: "5",
    title: "Dairy & Eggs",
    image: require("../../assets/img/pd5.png"),
    bg: "#FFF8E5",
    border: "#FDE598",
  },
  {
    id: "6",
    title: "Beverages",
    image: require("../../assets/img/pd6.png"),
    bg: "#EDF7FC",
    border: "#B7DFF5",
  },
  {
    id: "7",
    title: "Frash Fruits\n& Vegetable",
    image: require("../../assets/img/pd1.png"),
    bg: "#EEF7F1",
    border: "#53B175",
  },
  {
    id: "8",
    title: "Cooking Oil\n& Ghee",
    image: require("../../assets/img/pd2.png"),
    bg: "#FFF6ED",
    border: "#F8A44C",
  },
];

const Explore = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Find Products</Text>
      </View>
      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput placeholder="Search Store" style={styles.input} />
      </View>

      {/* Grid */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { backgroundColor: item.bg, borderColor: item.border },
            ]}
            onPress={() => navigation.navigate("Beverages")}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Bottom Tab */}
      <View style={styles.tabBar}>
        <TabItem
          icon="storefront-outline"
          label="Shop"
          onPress={() => navigation.goBack()}
        />
        <TabItem
          icon="compass-outline"
          label="Explore"
          onPress={() => navigation.navigate("Explore")}
          active
        />
        <TabItem icon="cart-outline" label="Cart" />
        <TabItem icon="heart-outline" label="Favourite" />
        <TabItem icon="person-outline" label="Account" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 20,
    color: "#181725",
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#F2F3F2",
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  card: {
    width: "48%",
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1.5,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },

  cardText: {
    textAlign: "center",
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    color: "#181725",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#E6EBF3",
    shadowOffset: {
      width: 0,
      height: -12, // 🔥 âm để shadow lên trên
    },
    shadowOpacity: 0.5,
    shadowRadius: 37,

    // Shadow Android
    elevation: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },

  tabItem: {
    alignItems: "center",
  },
});

export default Explore;
