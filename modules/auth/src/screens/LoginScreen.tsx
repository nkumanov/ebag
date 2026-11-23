import { StyleSheet, Text, View } from "react-native";
import { selectName } from "../state/auth.slice";
import { useAppSelector } from "@ebag/core";
import { ColorsType, useTheme } from "@ebag/ui";

const LoginScreen = () => {
  const userData = useAppSelector(selectName);

  const { colors, theme } = useTheme();

  return (
    <View>
      <Text>Testing text from Login screen</Text>
    </View>
  );
};

const styles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.surface.primary,
    },
  });

export default LoginScreen;
