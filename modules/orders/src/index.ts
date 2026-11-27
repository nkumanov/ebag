import type { NavigationRouteType } from "@ebag/core";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import OrdersScreen from "./screens/OrdersScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";

export { OrderDetailsScreen, OrdersScreen, OrderTrackingScreen };

export const orderRoutes: NavigationRouteType[] = [
  { name: "OrdersScreen", component: OrdersScreen },
  { name: "OrderDetails", component: OrderDetailsScreen, hideBottomTab: true },
  { name: "OrderTracking", component: OrderTrackingScreen, hideBottomTab: true },
];
