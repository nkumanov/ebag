import type { NavigationRouteType } from "@ebag/core";
import AccountScreen from "./screens/AccountScreen";
import AddressesScreen from "./screens/AddressesScreen";
import ProfileScreen from "./screens/ProfileScreen";

export { AccountScreen, AddressesScreen, ProfileScreen };

export const accountRoutes: NavigationRouteType[] = [
  { name: "AccountScreen", component: AccountScreen },
  { name: "Profile", component: ProfileScreen, hideBottomTab: true },
  { name: "Addresses", component: AddressesScreen, hideBottomTab: true },
];
