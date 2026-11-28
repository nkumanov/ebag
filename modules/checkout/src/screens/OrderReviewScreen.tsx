import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const OrderReviewScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Review your order</Text>
    </PageWrapper>
  );
};

export default OrderReviewScreen;
