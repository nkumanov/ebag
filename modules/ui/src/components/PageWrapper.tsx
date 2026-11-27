import type { ReactNode } from "react";
import { ScrollView, StyleSheet, type ScrollViewProps } from "react-native";
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "../hooks/useTheme";

type WithScrollView =
  | {
      withScroll: true;
      scrollViewProps?: Omit<ScrollViewProps, "children">;
    }
  | { withScroll?: false; scrollViewProps?: never };

export type PageWrapperProps = {
  children: ReactNode;
  safeAreaViewProps?: Omit<SafeAreaViewProps, "children">;
} & WithScrollView;

const PageWrapper = ({
  children,
  safeAreaViewProps,
  scrollViewProps,
  withScroll,
}: PageWrapperProps) => {
  const { colors } = useTheme();
  const background = { backgroundColor: colors.surface.primary };

  return (
    <SafeAreaView
      {...safeAreaViewProps}
      style={[styles.container, background, safeAreaViewProps?.style]}
    >
      {withScroll ? (
        <ScrollView
          {...scrollViewProps}
          style={[styles.container, background, scrollViewProps?.style]}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageWrapper;
