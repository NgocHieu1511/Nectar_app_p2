import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

const ProductDetail = () => {
  const navigation = useNavigation();
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>

          <Feather name="upload" size={22} color="black" />
        </View>

        {/* Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/img/apple.png")}
            style={styles.image}
          />
        </View>

        {/* Info */}
        <View style={styles.info}>
          <View style={styles.rowBetween}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <Ionicons name="heart-outline" size={24} color="#7C7C7C" />
          </View>

          <Text style={styles.desc}>1kg, Price</Text>

          {/* Quantity + Price */}
          <View style={styles.qtyRow}>
            <View style={styles.qtyBox}>
              <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : 1)}>
                <Ionicons name="remove" size={18} color="#B3B3B3" />
              </TouchableOpacity>

              <Text style={styles.qty}>{qty}</Text>

              <TouchableOpacity onPress={() => setQty(qty + 1)}>
                <Ionicons name="add" size={18} color="#53B175" />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>$4.99</Text>
          </View>
        </View>

        {/* Sections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Image source={require("../../assets/img/arrow-down.png")} />
          </View>
          <Text style={styles.sectionText}>
            Apples are nutritious. Apples may be good for weight loss. apples
            may be good for your heart. As part of a healtful and varied diet.
          </Text>
        </View>

        <View style={[styles.sectionRow, styles.Nutritions]}>
          <Text style={styles.sectionTitle}>Nutritions</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.badge}>100gr</Text>
            <Image source={require("../../assets/img/arrow-right.png")} />
          </View>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Review</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              {[...Array(5)].map((_, i) => (
                <Ionicons key={i} name="star" size={16} color="#F3603F" />
              ))}
            </View>
            <Image source={require("../../assets/img/arrow-right.png")} />
          </View>
        </View>
      </ScrollView>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    fontFamily: "Gilroy",
  },

  header: {
    paddingTop: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  imageWrapper: {
    backgroundColor: "#F2F3F2",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  info: {
    marginTop: 20,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 20,
    color: "#181725",
  },

  desc: {
    fontFamily: "Gilroy-Medium",
    color: "#7C7C7C",
    marginTop: 5,
  },

  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",

    borderColor: "#E2E2E2",

    gap: 10,
  },
  Nutritions: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    borderEndColor: "#E2E2E2B2",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },

  qty: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: "#E2E2E2",
  },

  price: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    color: "#181725",
  },

  section: {
    marginTop: 20,
    paddingTop: 20,

    borderTopWidth: 1,

    borderTopColor: "#E2E2E2B2",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    color: "#181725",
  },

  sectionText: {
    color: "#7C7C7C",
    marginTop: 5,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  badge: {
    color: "#7C7C7C",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#EBEBEB",
    fontSize: 9,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontFamily: "Gilroy-SemiBold",
    fontSize: 16,
  },
});

export default ProductDetail;
