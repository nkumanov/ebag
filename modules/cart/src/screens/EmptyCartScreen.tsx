import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const EmptyCartScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Your cart is empty</Text>
      <Button
        title="Back to cart"
        onPress={() => navigation.navigate("CartScreen", undefined, { pop: true })}
      />
    </PageWrapper>
  );
};

export default EmptyCartScreen;
