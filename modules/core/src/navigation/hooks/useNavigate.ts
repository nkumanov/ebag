import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  interface AppRootParams {}
}

type RootParams = { [Route in keyof AppRootParams]: AppRootParams[Route] };

export const useNavigate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  return {
    navigation,
  };
};
