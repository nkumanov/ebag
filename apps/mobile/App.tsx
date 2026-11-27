import {
  NavigationContainer,
  NavigationState,
  ParamListBase,
  store,
  TabNavigator,
  useNavigationContainerRef,
} from "@ebag/core";
import { ThemeProvider } from "@ebag/ui";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import {
  AccountNavigator,
  CartNavigator,
  CategoriesNavigator,
  OrdersNavigator,
} from "./src/navigation/stackNavigators";
import { hideTabBarOnSpecificScreens } from "./src/navigation/utils";

const initialScreenByTab: Record<string, string> = {
  CategoriesTab: "Categories",
  OrdersTab: "OrdersScreen",
  CartTab: "CartScreen",
  AccountTab: "AccountScreen",
};

export default function App() {
  const navigationRef = useNavigationContainerRef<ParamListBase>();

  const onStateChange = () => {
    const current = navigationRef.getCurrentRoute();
    const currentRouteName = current?.name;

    if (true) {
      // TODO: add dev check
      console.log(currentRouteName);
    }
  };
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <View style={styles.container}>
            <NavigationContainer
              onStateChange={onStateChange}
              ref={navigationRef}
            >
              <TabNavigator.Navigator
                screenOptions={({ route }) => ({
                  tabBarStyle: {
                    display: hideTabBarOnSpecificScreens(
                      route,
                      initialScreenByTab[route.name],
                    ),
                  },
                  tabBarVisibilityAnimationEnabled: false,
                })}
              >
                <TabNavigator.Screen
                  name="CategoriesTab"
                  component={CategoriesNavigator}
                  options={{
                    title: "Categories",
                    tabBarIcon: {
                      type: "image",
                      source: require("./assets/icons/categories.png"),
                    },
                  }}
                />
                <TabNavigator.Screen
                  name="OrdersTab"
                  component={OrdersNavigator}
                  options={{
                    title: "Orders",
                    tabBarIcon: {
                      type: "image",
                      source: require("./assets/icons/orders.png"),
                    },
                  }}
                />
                <TabNavigator.Screen
                  name="CartTab"
                  component={CartNavigator}
                  options={{
                    title: "Cart",
                    tabBarIcon: {
                      type: "image",
                      source: require("./assets/icons/cart.png"),
                    },
                  }}
                />
                <TabNavigator.Screen
                  name="AccountTab"
                  component={AccountNavigator}
                  options={{
                    title: "Account",
                    tabBarIcon: {
                      type: "image",
                      source: require("./assets/icons/account.png"),
                    },
                  }}
                />
              </TabNavigator.Navigator>
            </NavigationContainer>
          </View>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
