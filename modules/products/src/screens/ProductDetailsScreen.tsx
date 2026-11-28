import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const ProductDetailsScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Product details</Text>
    </PageWrapper>
  );
};

export default ProductDetailsScreen;
