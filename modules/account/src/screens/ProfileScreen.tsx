import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Profile</Text>
      <Button
        title="Back to account"
        onPress={() => navigation.navigate("AccountScreen", undefined, { pop: true })}
      />
    </PageWrapper>
  );
};

export default ProfileScreen;
