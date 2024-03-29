import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { CountingMode } from "@/types";

type Props = {
  countingMode: CountingMode;
  selectedDate: Dayjs;
};

export default function DateDisplay({ countingMode, selectedDate }: Props) {
  return (
    <View>
      <Text>{selectedDate.format("YYYY-MM-DD")}</Text>
      {/* if mode is 'due', it wil show how many days left from today until user's selected date */}
      {countingMode === "due" && (
        <View>
          <Text>{selectedDate.diff(dayjs(), "day")} days left</Text>
          <Text>D-{selectedDate.diff(dayjs(), "day")}</Text>
        </View>
      )}

      {/* if mode is 'duration', it will show how many days have passed from user's selected date until today but if user's selected date is later than today then just show 0 */}
      {countingMode === "duration" && (
        <View>
          <Text>
            {dayjs().diff(selectedDate, "day") > 0
              ? dayjs().diff(selectedDate, "day")
              : 0}{" "}
            days passed
          </Text>
          <Text>
            D+
            {dayjs().diff(selectedDate, "day") > 0
              ? dayjs().diff(selectedDate, "day")
              : 0}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
