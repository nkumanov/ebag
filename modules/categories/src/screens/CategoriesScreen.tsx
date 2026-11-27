import { useNavigate } from "@ebag/core";
import { PageWrapper, spacing, useTheme } from "@ebag/ui";
import { Button, StyleSheet, Text } from "react-native";

const CategoriesScreen = () => {
  const { navigation } = useNavigate();

  return (
    <PageWrapper
      withScroll
      safeAreaViewProps={{ edges: ["left", "right", "top"] }}
    >
      <Text style={{ color: "white" }}>Categories</Text>

      <Button
        title="Category details"
        onPress={() =>
          navigation.push("CategoryDetails", { userId: "testing123" })
        }
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    gap: spacing.md,
    padding: spacing.md,
  },
});

export default CategoriesScreen;
