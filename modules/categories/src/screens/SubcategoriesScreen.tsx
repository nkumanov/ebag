import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const SubcategoriesScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Subcategories</Text>
    </PageWrapper>
  );
};

export default SubcategoriesScreen;
