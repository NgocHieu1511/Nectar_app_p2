import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Section from "./Section";
import ProductCard from "./ProductCard";
import Category from "./Category";
import TabItem from "./TabItem";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    image: require("../../assets/img/banana.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 2,
    name: "Red Apple",
    image: require("../../assets/img/apple.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 3,
    name: "Bell Pepper Red",
    image: require("../../assets/img/ringchilli.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 4,
    name: "Ginger",
    image: require("../../assets/img/gung.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 5,
    name: "Beef Bone",
    image: require("../../assets/img/beef.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 6,
    name: "Broiler Chicken",
    image: require("../../assets/img/chicken.png"),
    desc: "1kg, Priceg",
    price: "$4.99",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.Logo} source={require("../img/Carrot.png")} />
          <View style={styles.location}>
            <Ionicons name="location" size={20} />
            <Text style={styles.locationTitle}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput placeholder="Search Store" style={styles.input} />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image source={require("../img/banner.png")} />
        </View>

        {/* Exclusive Offer */}
        <Section title="Exclusive Offer">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard item={products[0]} />
            <ProductCard text={"ProductDetail"} item={products[1]} />
            <ProductCard item={products[2]} />
          </ScrollView>
        </Section>

        {/* Best Selling */}
        <Section title="Best Selling">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard item={products[3]} />
            <ProductCard item={products[4]} />
            <ProductCard item={products[5]} />
          </ScrollView>
        </Section>

        {/* Groceries */}
        <Section title="Groceries">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Category
              title="Pulses"
              color="#FDEBD0"
              image={require("../../assets/img/pulses.png")}
            />
            <Category
              title="Rice"
              color="#D5F5E3"
              image={require("../../assets/img/rice.png")}
            />
          </ScrollView>
        </Section>

        {/* More Products */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard item={products[4]} />
          <ProductCard item={products[5]} />
          <ProductCard item={products[0]} />
        </ScrollView>
      </ScrollView>

      {/* Bottom Tab */}
      <View style={styles.tabBar}>
        <TabItem icon="storefront-outline" label="Shop" active />
        <TabItem
          icon="compass-outline"
          label="Explore"
          onPress={() => navigation.navigate("Explore")}
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
    paddingTop: 45,
    paddingHorizontal: 25,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  Logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginBottom: 10,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationTitle: {
    color: "#4C4F4D",
    textAlign: "center",
    fontFamily: "Gilroy-SemiBold", // ⚠️ phải đúng tên font
    fontSize: 18,
    fontWeight: "600",
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

  banner: {
    backgroundColor: "#EAF7EE",

    borderRadius: 15,
    marginBottom: 30,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  seeAll: {
    color: "#53B175",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
  },

  productName: {
    marginTop: 5,
    fontWeight: "500",
  },

  price: {
    marginTop: 5,
    fontWeight: "bold",
  },

  addBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#53B175",
    borderRadius: 20,
    padding: 5,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    width: "48%",
    padding: 20,
    borderRadius: 15,
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
export default HomeScreen;
