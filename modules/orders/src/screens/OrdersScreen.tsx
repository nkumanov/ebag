import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const OrdersScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>My orders</Text>
      <Button
        title="Order details"
        onPress={() => navigation.navigate("OrderDetails")}
      />
      <Button
        title="Track an order"
        onPress={() => navigation.navigate("OrderTracking")}
      />
    </PageWrapper>
  );
};

export default OrdersScreen;
