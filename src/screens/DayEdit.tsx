import { Button, StyleSheet, Text, View } from "react-native";
import { useState, useCallback } from "react";
import { CountingMode } from "@/types";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import CountingModeSelection from "@/components/CountingModeSelection";
import DateDisplay from "@/components/DateDisplay";

export default function DayEdit() {
  const [countingMode, setCountingMode] = useState<CountingMode>("due");
  const [date, setDate] = useState<Dayjs>(dayjs());

  const handleModeChange = useCallback((mode: CountingMode) => {
    setCountingMode(mode);
  }, []);

  return (
    <View style={styles.container}>
      <Text>DayEdit</Text>
      <CountingModeSelection
        currentMode={countingMode}
        onChangeMode={handleModeChange}
      />
      <View>
        <Text>Mode: {countingMode}</Text>
      </View>
      <View>
        <DateTimePicker
          mode="single"
          minDate={countingMode === "due" ? dayjs().toDate() : null}
          date={date}
          onChange={(params) => setDate(dayjs(params.date))}
        />
      </View>

      <DateDisplay countingMode={countingMode} selectedDate={date} />
      <View>
        <Button
          title="Save"
          onPress={() => {
            // save the date to internal storage
            // navigate back to DayList
            // navigation.navigate("DayList");
          }}
        />
      </View>
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
