import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const OrderTrackingScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Track your order</Text>
      <Button
        title="Back to orders"
        onPress={() => navigation.navigate("OrdersScreen", undefined, { pop: true })}
      />
    </View>
  );
};

export default OrderTrackingScreen;
