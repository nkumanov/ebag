import { changeUserDetails, LoginScreen } from "@ebag/auth";
import { store, useAppDispatch } from "@ebag/core";
import { ThemeProvider } from "@ebag/ui";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(changeUserDetails());
    }, 2000);
  }, [dispatch]);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <SafeAreaView style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <LoginScreen></LoginScreen>
          </SafeAreaView>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
