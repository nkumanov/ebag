import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const OrderDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Order details</Text>
      <Button
        title="Track this order"
        onPress={() => navigation.navigate("OrderTracking")}
      />
      <Button
        title="Back to orders"
        onPress={() => navigation.navigate("OrdersScreen", undefined, { pop: true })}
      />
    </View>
  );
};

export default OrderDetailsScreen;
