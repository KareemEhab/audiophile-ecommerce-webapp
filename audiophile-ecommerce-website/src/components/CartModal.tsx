import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="1rem" maxW="23.56rem" bg="white.700">
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
