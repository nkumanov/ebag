import {
  borderRadius,
  Chip,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  useTheme,
} from "@ebag/ui";
import type { ColorsType } from "@ebag/ui";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type ProductCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  price: number;
  oldPrice?: number;
  promo?: { title: string; color?: keyof ColorsType["promo"] };
  buttonTitle?: string;
  onButtonPress?: () => void;
};

const ProductCard = ({
  title,
  subtitle,
  imageSrc,
  price,
  oldPrice,
  promo,
  buttonTitle,
  onButtonPress,
}: ProductCardProps) => {
  const { colors } = useTheme();
  const hasDiscount = oldPrice !== undefined && oldPrice > price;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface.primary,
          borderColor: colors.border.subtle,
        },
      ]}
    >
      <View
        style={[
          styles.imageArea,
          { backgroundColor: colors.surface.secondary },
        ]}
      >
        <Image
          source={{ uri: "https://ebag.bg/products/images/92283/400/webp" }}
          style={styles.image}
        />
        {promo && (
          <View style={styles.promo}>
            <Chip title={promo.title} color={promo.color} />
          </View>
        )}
      </View>

      <View style={styles.details}>
        <Text
          numberOfLines={2}
          style={[styles.title, { color: colors.text.primary }]}
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.subtitle, { color: colors.text.muted }]}
        >
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <View style={styles.prices}>
            <Text
              style={[
                styles.price,
                {
                  color: hasDiscount
                    ? colors.status.error.foreground
                    : colors.text.primary,
                },
              ]}
            >
              {price.toFixed(2)}
            </Text>
            {hasDiscount && (
              <Text style={[styles.oldPrice, { color: colors.text.muted }]}>
                {oldPrice.toFixed(2)}
              </Text>
            )}
          </View>
          {buttonTitle && onButtonPress && (
            <Pressable
              accessibilityRole="button"
              onPress={onButtonPress}
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed
                    ? colors.accent.pressed
                    : colors.accent.primary,
                },
              ]}
            >
              <Text
                style={[styles.buttonLabel, { color: colors.accent.onPrimary }]}
              >
                {buttonTitle}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 360,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    overflow: "hidden",
    width: "100%",
  },
  imageArea: {
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  promo: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
  },
  details: {
    flex: 1,
    padding: spacing.sm,
    gap: spacing.xs,
  },
  title: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.sm,
  },
  subtitle: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
  },
  footer: {
    marginTop: "auto",
    gap: spacing.sm,
  },
  prices: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: spacing.xs,
  },
  price: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.md,
  },
  oldPrice: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    textDecorationLine: "line-through",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  buttonLabel: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.sm,
    textAlign: "center",
  },
});

export default ProductCard;
