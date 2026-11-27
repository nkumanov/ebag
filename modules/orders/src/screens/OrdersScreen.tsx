import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const OrdersScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>My orders</Text>
      <Button
        title="Order details"
        onPress={() => navigation.navigate("OrderDetails")}
      />
      <Button
        title="Track an order"
        onPress={() => navigation.navigate("OrderTracking")}
      />
    </View>
  );
};

export default OrdersScreen;
