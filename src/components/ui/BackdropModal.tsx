import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { Dispatch, SetStateAction, ReactNode } from "react";

type Props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export default function BackdropModal({
  modalVisible,
  setModalVisible,
  children,
}: Props) {
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <View
        style={{
          position: "absolute",
          display: modalVisible ? "flex" : "none",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          {children}
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
