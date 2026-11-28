import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const CartDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Cart details</Text>
      <Button
        title="Back to cart"
        onPress={() => navigation.navigate("CartScreen", undefined, { pop: true })}
      />
    </PageWrapper>
  );
};

export default CartDetailsScreen;
