import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const ProductSearchScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Search products</Text>
    </View>
  );
};

export default ProductSearchScreen;
