import { Text } from "react-native";
import { selectName } from "../state/auth.slice";
import { useAppSelector } from "@ebag/core";
import { PageWrapper } from "@ebag/ui";

const LoginScreen = () => {
  const userData = useAppSelector(selectName);

  return (
    <PageWrapper>
      <Text>Testing text from Login screen</Text>
    </PageWrapper>
  );
};

export default LoginScreen;
