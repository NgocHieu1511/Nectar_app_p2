import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./assets/components/HomeScreen";
import Explore from "./assets/components/Explore";
import ProductDetail from "./assets/components/ProductDetail";
import Beverages from "./assets/components/Beverages";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    "Gilroy-Black": require("./assets/font/Gilroy-Black.ttf"),
    "Gilroy-Bold": require("./assets/font/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./assets/font/Gilroy-Medium.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Beverages" component={Beverages} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
