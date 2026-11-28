import { accountRoutes } from "@ebag/account";
import { cartRoutes } from "@ebag/cart";
import { categoryRoutes } from "@ebag/categories";
import { MainStack } from "@ebag/core";
import { orderRoutes } from "@ebag/orders";

export function CategoriesNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Categories"
      screenOptions={({ route }) => ({
        headerShown: route.name !== "Categories",
      })}
    >
      {categoryRoutes.map(({ name, component }) => (
        <MainStack.Screen key={name} name={name} component={component} />
      ))}
    </MainStack.Navigator>
  );
}

export function CartNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="CartScreen"
      screenOptions={({ route }) => ({
        headerShown: route.name !== "CartScreen",
      })}
    >
      {cartRoutes.map(({ name, component }) => (
        <MainStack.Screen key={name} name={name} component={component} />
      ))}
    </MainStack.Navigator>
  );
}

export function AccountNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={({ route }) => ({
        headerShown: route.name !== "AccountScreen",
      })}
    >
      {accountRoutes.map(({ name, component }) => (
        <MainStack.Screen key={name} name={name} component={component} />
      ))}
    </MainStack.Navigator>
  );
}

export function OrdersNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="OrdersScreen"
      screenOptions={({ route }) => ({
        headerShown: route.name !== "OrdersScreen",
      })}
    >
      {orderRoutes.map(({ name, component }) => (
        <MainStack.Screen key={name} name={name} component={component} />
      ))}
    </MainStack.Navigator>
  );
}
