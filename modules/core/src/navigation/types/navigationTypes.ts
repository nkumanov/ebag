import { ReactNode } from "react";

export type NavigationRouteType = {
  name: string;
  component: () => ReactNode;
  hideBottomTab?: boolean;
};
