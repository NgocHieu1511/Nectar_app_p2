import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    name: "Diet Coke",
    desc: "355ml, Price",
    price: "$1.99",
    image: require("../../assets/img/b1.png"),
  },
  {
    id: "2",
    name: "Sprite Can",
    desc: "325ml, Price",
    price: "$1.50",
    image: require("../../assets/img/b2.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    desc: "2L, Price",
    price: "$15.99",
    image: require("../../assets/img/b3.png"),
  },
  {
    id: "4",
    name: "Orange Juice",
    desc: "2L, Price",
    price: "$15.99",
    image: require("../../assets/img/b4.png"),
  },
  {
    id: "5",
    name: "Coca Cola Can",
    desc: "325ml, Price",
    price: "$4.99",
    image: require("../../assets/img/b5.png"),
  },
  {
    id: "6",
    name: "Pepsi Can",
    desc: "330ml, Price",
    price: "$4.99",
    image: require("../../assets/img/b6.png"),
  },
];

const Beverages = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <Image source={require("../../assets/img/option.png")} />
      </View>

      {/* List */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>

            <View style={styles.bottom}>
              <Text style={styles.price}>{item.price}</Text>

              <TouchableOpacity style={styles.addBtn}>
                <Image source={require("../../assets/img/add.png")} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
    fontFamily: "Gilroy",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    color: "#181725",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },

  image: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    marginBottom: 10,
  },

  name: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
    color: "#181725",
    marginTop: 10,
  },

  desc: {
    fontFamily: "Gilroy-Medium",
    fontSize: 12,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    color: "#181725",
  },

  addBtn: {
    backgroundColor: "#53B175",
    borderRadius: 15,
    padding: 15,
  },
});

export default Beverages;
