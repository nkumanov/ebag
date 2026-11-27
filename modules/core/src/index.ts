export * from "./state/store";
export * from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppDispatch, RootState } from "./state/store";
export type AllowedAction = AppActions[keyof AppActions];

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// routing
export { MainStack } from "./navigation/MainStack";
export * from "@react-navigation/native";
export * from "@react-navigation/native-stack";
export { useNavigate } from "./navigation/hooks/useNavigate";
export { TabNavigator } from "./navigation/NativeBottomNavigator";
export type { NavigationRouteType } from "./navigation/types/navigationTypes";
