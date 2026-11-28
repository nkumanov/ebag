import {
  type NavigationProp,
  type ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@ebag/core";
import { PageWrapper, useTheme } from "@ebag/ui";
import { Button, Text } from "react-native";
type RootParams = {
  [Name in keyof AppRootParams]: AppRootParams[Name];
};
const CategoryDetailsScreen = () => {
  const { userId } = useRoute<RouteProp<RootParams, "Categories">>().params;
  const navigate = useNavigation<NavigationProp<ParamListBase>>();
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Category details</Text>
      <Text style={{ color: colors.text.primary }}>{userId}</Text>
      <Button
        title="Back to categories"
        onPress={() =>
          navigate.navigate("Categories", undefined, { pop: true })
        }
      />
    </PageWrapper>
  );
};

export default CategoryDetailsScreen;
