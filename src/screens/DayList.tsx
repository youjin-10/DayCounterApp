import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useEffect, useState } from "react";
import BackdropModal from "@/components/ui/BackdropModal";
import { useQuery } from "@realm/react";
import { Event } from "@/data";

type Props = NativeStackScreenProps<RootStackParamList, "DayList">;

export default function DayList({ navigation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("DayList mounted");

    return () => {
      console.log("DayList unmounted");
    };
  }, []);

  const events = useQuery(Event.schema.name);
  console.log(events);

  return (
    <View style={styles.container}>
      <Text>DayList</Text>
      <BackdropModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 36,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: "32%",
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
              }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  gap: 20,
                }}>
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("DayEdit", { mode: "due" });
                    setModalVisible(false);
                  }}>
                  <Text>D-day</Text>
                  <Text>몇 일 남았을까?</Text>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("DayEdit", { mode: "duration" });
                    setModalVisible(false);
                  }}>
                  <Text>D+day</Text>
                  <Text>몇 일 지났을까?</Text>
                </Pressable>
              </View>
              <Button
                title="Close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </BackdropModal>
      <Button
        title="Go to DayEdit"
        onPress={() => navigation.navigate("DayEdit")}
      />
      <Button
        title="show modal"
        onPress={() => {
          setModalVisible(true);
        }}
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
