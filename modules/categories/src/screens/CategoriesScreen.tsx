import { useNavigate } from "@ebag/core";
import { ListItem, useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const CategoriesScreen = () => {
  const { navigation } = useNavigate();

  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.surface.primary, flex: 1 }}>
      <Text style={{ color: colors.text.primary }}>Categories</Text>
      <ListItem
        title="Testing title"
        description="View products in this category"
        onClick={() => navigation.push("CategoryDetails")}
        iconLeftName="add-sharp"
        iconLeftSize={25}
        outlined
      />
      <Button
        title="Category details"
        onPress={() => navigation.push("CategoryDetails", {userId: 'testing123'})}
      />
    </View>
  );
};

export default CategoriesScreen;
