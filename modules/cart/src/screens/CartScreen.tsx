import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Shopping cart</Text>
      <Button
        title="Cart details"
        onPress={() => navigation.navigate("CardDetails")}
      />
      <Button
        title="Empty cart"
        onPress={() => navigation.navigate("EmptyCart")}
      />
    </View>
  );
};

export default CartScreen;
