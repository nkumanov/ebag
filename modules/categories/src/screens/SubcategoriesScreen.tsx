import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const SubcategoriesScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Subcategories</Text>
    </View>
  );
};

export default SubcategoriesScreen;
