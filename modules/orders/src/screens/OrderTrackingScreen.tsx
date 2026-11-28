import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const OrderTrackingScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Track your order</Text>
      <Button
        title="Back to orders"
        onPress={() => navigation.navigate("OrdersScreen", undefined, { pop: true })}
      />
    </PageWrapper>
  );
};

export default OrderTrackingScreen;
