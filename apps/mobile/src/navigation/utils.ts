import { accountRoutes } from "@ebag/account";
import { cartRoutes } from "@ebag/cart";
import { categoryRoutes } from "@ebag/categories";
import { getFocusedRouteNameFromRoute } from "@ebag/core";
import { orderRoutes } from "@ebag/orders";

const routes = [
  ...accountRoutes,
  ...cartRoutes,
  ...categoryRoutes,
  ...orderRoutes,
];

export const hideTabBarOnSpecificScreens = (
  route: Parameters<typeof getFocusedRouteNameFromRoute>[0],
  initialRouteName?: string,
): "flex" | "none" => {
  const focusedRoute =
    getFocusedRouteNameFromRoute(route) ?? initialRouteName ?? "";
  return routes.some(
    (entry) => entry.name === focusedRoute && entry.hideBottomTab === true,
  )
    ? "none"
    : "flex";
};
