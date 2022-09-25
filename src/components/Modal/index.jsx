import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import Form from "../Form";

const CustomModal = ({ isOpen, onClose, form }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="var(--medium-blue1)">
        <ModalHeader color="whiteAlpha.900">Adicionar novo contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            fields={form.fields}
            schema={form.schema}
            callback={form.callback}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
