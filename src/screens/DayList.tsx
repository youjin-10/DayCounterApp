import { Button, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

type Props = NativeStackScreenProps<RootStackParamList, "DayList">;

export default function DayList({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>DayList</Text>
      <Button
        title="Go to DayEdit"
        onPress={() => navigation.navigate("DayEdit")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
