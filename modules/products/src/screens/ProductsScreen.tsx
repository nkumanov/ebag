import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const ProductsScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Products</Text>
    </View>
  );
};

export default ProductsScreen;
