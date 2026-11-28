import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const CheckoutScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Checkout</Text>
    </PageWrapper>
  );
};

export default CheckoutScreen;
