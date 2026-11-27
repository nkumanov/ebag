import { NavigationRouteType } from "@ebag/core";
import CartScreen from "./screens/CartScreen";
import CartDetailsScreen from "./screens/CartDetailsScreen";
import EmptyCartScreen from "./screens/EmptyCartScreen";

//routing
export const cartRoutes: NavigationRouteType[] = [
  {
    name: "CartScreen",
    component: CartScreen,
  },
  {
    name: "CardDetails",
    component: CartDetailsScreen,
    hideBottomTab: true
  },
  {
    name: "EmptyCart",
    component: EmptyCartScreen,
    hideBottomTab: true
  },
];
