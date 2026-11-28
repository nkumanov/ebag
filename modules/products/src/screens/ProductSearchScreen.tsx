import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const ProductSearchScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Search products</Text>
    </PageWrapper>
  );
};

export default ProductSearchScreen;
