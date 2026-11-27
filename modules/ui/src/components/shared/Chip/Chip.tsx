import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import type { ColorsType } from "../../../styles/colors";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
} from "../../../styles/typography";

type ChipProps = {
  title: string;
  color?: keyof ColorsType["promo"];
};

const Chip = ({ title, color = "orchid" }: ChipProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.promo[color] }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  title: {
    color: "#FFFFFF",
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.xs,
  },
});

export default Chip;
