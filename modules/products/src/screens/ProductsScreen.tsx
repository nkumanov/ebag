import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const ProductsScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Products</Text>
    </PageWrapper>
  );
};

export default ProductsScreen;
