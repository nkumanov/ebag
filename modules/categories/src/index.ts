import { ReactNode } from "react";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryDetailsScreen from "./screens/CategoryDetailsScreen";
import { NavigationRouteType, NavigatorScreenParams } from "@ebag/core";

// export { default as CategoriesScreen } from "./screens/CategoriesScreen";
// export { default as CategoryDetailsScreen } from "./screens/CategoryDetailsScreen";
// export { default as SubcategoriesScreen } from "./screens/SubcategoriesScreen";

export const categoryRoutes: NavigationRouteType[] = [
  { name: "Categories", component: CategoriesScreen },
  {
    name: "CategoryDetails",
    component: CategoryDetailsScreen,
    hideBottomTab: true,
  },
] as const;

declare global {
  interface AppRootParams {
    Categories: {
      userId: string;
    };
    CategoryDetails: {
      userId: string;
    };
  }
}
