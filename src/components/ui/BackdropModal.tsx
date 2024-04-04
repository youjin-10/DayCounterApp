import { Modal, TouchableWithoutFeedback } from "react-native";
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        {children}
      </TouchableWithoutFeedback>
    </Modal>
  );
}
