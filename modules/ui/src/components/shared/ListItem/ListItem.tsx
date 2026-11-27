import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  Ionicons,
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";
import { useTheme } from "../../../hooks/useTheme";
import type { ColorsType } from "../../../styles/colors";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
} from "../../../styles/typography";
type ListItemWithIconLeft =
  | {
      iconLeftName: IoniconsIconName;
      iconLeftSize: number;
    }
  | {
      iconLeftName?: never;
      iconLeftSize?: never;
    };
type ListItemTypes = {
  title: string;
  description?: string;
  onClick: () => void;
  outlined?: boolean;
} & ListItemWithIconLeft;
const ListItem = ({
  title,
  description,
  onClick,
  outlined,
  iconLeftName,
  iconLeftSize = 20,
}: ListItemTypes) => {
  const { colors } = useTheme();

  const styles = getStyles(colors);
  return (
    <Pressable onPress={onClick} style={[outlined ? styles.outlined : []]}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {iconLeftName && (
            <View style={styles.iconLeftContainer}>
              <Ionicons
                name={iconLeftName}
                size={iconLeftSize}
                color={colors.accent.primary}
              />
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {description ? (
              <Text style={styles.description}>{description}</Text>
            ) : null}
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.text.muted} />
      </View>
    </Pressable>
  );
};

const getStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
      width: "100%",
      padding: spacing.lg,
    },
    subContainer: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      gap: spacing.md,
    },
    iconLeftContainer: {
      minWidth: 20,
      minHeight: 20,
      padding: spacing.sm,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.accent.subtle,
    },
    textContainer: {
      flex: 1,
      gap: spacing.xs,
    },
    title: {
      color: colors.text.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.md,
    },
    description: {
      color: colors.text.muted,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.sm,
    },
    outlined: {
        borderColor: colors.border.default,
        borderWidth: 1,
        borderRadius: borderRadius.md
    }
  });

export default ListItem;
