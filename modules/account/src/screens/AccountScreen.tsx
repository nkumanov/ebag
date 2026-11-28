import { type NavigationProp, type ParamListBase, useNavigation } from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>My account</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Saved addresses"
        onPress={() => navigation.navigate("Addresses")}
      />
    </PageWrapper>
  );
};

export default AccountScreen;
