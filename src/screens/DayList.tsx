import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "DayList">;

export default function DayList({ navigation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>DayList</Text>
      <View
        style={{
          position: "absolute",
          display: modalVisible ? "flex" : "none",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          justifyContent: "flex-end",
        }}></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{}}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}>
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,

                // width: "100%",
                height: "30%",
                // borderRadius: 10,
                // alignItems: "center",
                // justifyContent: "center",
                // borderWidth: 2,
                // borderStyle: "solid",
                // backgroundColor: "white",
              }}>
              <Text>Modal</Text>
              <Button
                title="Close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
