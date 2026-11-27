import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { useTheme } from "@ebag/ui";
import { Button, Text, View } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Profile</Text>
      <Button
        title="Back to account"
        onPress={() => navigation.navigate("AccountScreen", undefined, { pop: true })}
      />
    </View>
  );
};

export default ProfileScreen;
