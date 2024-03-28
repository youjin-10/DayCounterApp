import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { CountingMode } from "@/types";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";

export default function DayEdit() {
  const [countingMode, setCountingMode] = useState<CountingMode>("due");
  const [date, setDate] = useState<Dayjs>(dayjs());

  return (
    <View style={styles.container}>
      <Text>DayEdit</Text>
      <View>
        <Button title="D-day" onPress={() => setCountingMode("due")} />
        <Button title="D+" onPress={() => setCountingMode("duration")} />
      </View>
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
      <View>
        <Text>{date.format("YYYY-MM-DD")}</Text>
        {/* if mode is 'due', it wil show how many days left from today until user's selected date */}
        {countingMode === "due" && (
          <View>
            <Text>{date.diff(dayjs(), "day")} days left</Text>
            <Text>D-{date.diff(dayjs(), "day")}</Text>
          </View>
        )}

        {/* if mode is 'duration', it will show how many days have passed from user's selected date until today but if user's selected date is later than today then just show 0 */}
        {countingMode === "duration" && (
          <View>
            <Text>
              {dayjs().diff(date, "day") > 0 ? dayjs().diff(date, "day") : 0}{" "}
              days passed
            </Text>
            <Text>
              D+{dayjs().diff(date, "day") > 0 ? dayjs().diff(date, "day") : 0}
            </Text>
          </View>
        )}
      </View>
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
