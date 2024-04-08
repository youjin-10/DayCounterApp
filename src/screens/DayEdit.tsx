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
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useRealm } from "@realm/react";
import { Event } from "@/data";

type Props = NativeStackScreenProps<RootStackParamList, "DayEdit">;

/**
 TODO
 type of data to be saved in internal storage
 {
    countingMode: CountingMode;
    selectedDate: string; // ISO 8601 format
    title: string;
 }
 */

export default function DayEdit({ navigation, route }: Props) {
  const currentMode = route.params?.mode ?? "due";
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [eventTitle, setEventTitle] = useState<string>("");
  const realm = useRealm();

  const handleTitleChange = (text: string) => {
    setEventTitle(text);
  };

  const handleSave = () => {
    console.log(currentMode, date, eventTitle);

    // TODO: error handling
    realm.write(() => {
      realm.create(
        Event.schema.name,
        Event.generate(currentMode, date.toISOString(), eventTitle)
      );
    });

    navigation.navigate("DayList");
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

            <DateTimePicker
              mode="single"
              minDate={currentMode === "due" ? dayjs().toDate() : null}
              date={date}
              onChange={(params) => setDate(dayjs(params.date))}
            />

            <DateDisplay countingMode={currentMode} selectedDate={date} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View>
        <Button disabled={!eventTitle} title="Save" onPress={handleSave} />
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
