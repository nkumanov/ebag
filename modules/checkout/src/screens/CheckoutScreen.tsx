import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const CheckoutScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Checkout</Text>
    </View>
  );
};

export default CheckoutScreen;
