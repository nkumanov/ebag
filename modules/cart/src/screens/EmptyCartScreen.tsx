import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const EmptyCartScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Your cart is empty</Text>
      <Button
        title="Back to cart"
        onPress={() => navigation.navigate("CartScreen", undefined, { pop: true })}
      />
    </View>
  );
};

export default EmptyCartScreen;
