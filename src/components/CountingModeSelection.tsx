import { Button, StyleSheet, Text, View } from "react-native";
import { CountingMode } from "@/types";

type Props = {
  currentMode: CountingMode;
  onChangeMode: (mode: CountingMode) => void;
};

export default function CountingModeSelection({
  currentMode,
  onChangeMode,
}: Props) {
  return (
    <View>
      <Button
        title="D-day"
        onPress={() => onChangeMode("due")}
        color={currentMode === "due" ? "blue" : "gray"}
      />
      <Button
        title="D+"
        onPress={() => onChangeMode("duration")}
        color={currentMode === "duration" ? "blue" : "gray"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
