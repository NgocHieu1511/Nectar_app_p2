import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TabItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.tabItem}>
      <Ionicons name={icon} size={22} color={active ? "#53B175" : "#181725"} />
      <Text
        style={[
          { color: active ? "#53B175" : "#181725", fontSize: 12 },
          styles.label,
        ]}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 3,

    textAlign: "center",
    fontFamily: "Gilroy-Bold",
    fontSize: 12,
  },
});
export default TabItem;
