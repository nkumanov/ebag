import { PageWrapper, useTheme } from "@ebag/ui";
import { Text } from "react-native";

const DeliveryScreen = () => {
  const { colors } = useTheme();

  return (
    <PageWrapper>
      <Text style={{ color: colors.text.primary }}>Delivery options</Text>
    </PageWrapper>
  );
};

export default DeliveryScreen;
