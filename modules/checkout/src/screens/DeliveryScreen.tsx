import { useTheme } from "@ebag/ui";
import { Text, View } from "react-native";

const DeliveryScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.surface.primary }}>
      <Text style={{ color: colors.text.primary }}>Delivery options</Text>
    </View>
  );
};

export default DeliveryScreen;
