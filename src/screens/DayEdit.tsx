import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useCallback } from "react";
import { CountingMode } from "@/types";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import CountingModeSelection from "@/components/CountingModeSelection";
import DateDisplay from "@/components/DateDisplay";

/**
 TODO
 type of data to be saved in internal storage
 {
    countingMode: CountingMode;
    selectedDate: string; // ISO 8601 format
    title: string;
 }
  
 */

export default function DayEdit() {
  const [countingMode, setCountingMode] = useState<CountingMode>("due");
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [eventTitle, setEventTitle] = useState<string>("");

  const handleModeChange = useCallback((mode: CountingMode) => {
    setCountingMode(mode);
  }, []);

  const handleTitleChange = (text: string) => {
    setEventTitle(text);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          backgroundColor: "white",
          padding: 20,
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
              }}>
              <TextInput
                style={styles.input}
                placeholder="메모를 입력하세요"
                value={eventTitle}
                onChangeText={handleTitleChange}
              />
            </View>

            <CountingModeSelection
              currentMode={countingMode}
              onChangeMode={handleModeChange}
            />

            <DateTimePicker
              mode="single"
              minDate={countingMode === "due" ? dayjs().toDate() : null}
              date={date}
              onChange={(params) => setDate(dayjs(params.date))}
            />

            <DateDisplay countingMode={countingMode} selectedDate={date} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

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
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    height: 46,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
