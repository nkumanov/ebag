import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Product details</Text>
    </View>
  );
};

export default ProductDetailsScreen;
