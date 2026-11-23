import { StyleSheet, Text, View } from "react-native";
import { selectName } from "../state/auth.slice";
import { useAppSelector } from "@finances/core";
import { ColorsType, useTheme } from "@finances/ui";

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
