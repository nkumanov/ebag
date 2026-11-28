import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Shopping cart</Text>
      <Button
        title="Cart details"
        onPress={() => navigation.navigate("CardDetails")}
      />
      <Button
        title="Empty cart"
        onPress={() => navigation.navigate("EmptyCart")}
      />
    </PageWrapper>
  );
};

export default CartScreen;
