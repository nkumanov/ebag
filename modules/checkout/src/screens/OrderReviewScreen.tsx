import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const OrderReviewScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Review your order</Text>
    </View>
  );
};

export default OrderReviewScreen;
