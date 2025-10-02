
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import toast from "react-hot-toast";
import { useRemovePostMutation } from "./postApi";


export default function RemovePost({ id }) {
  const [removePost, { isLoading }] = useRemovePostMutation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleRemove = async () => {
    try {
      await removePost(id).unwrap();
      toast.success("Post removed successfully");
    } catch (err) {
      toast.error(err.data.message);
    }
  }

  return (
    <>
      <Button
        isLoading={isLoading}
        onPress={onOpen} isIconOnly aria-label="Like" color="danger">
        <i className="fa-solid fa-trash"></i>
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Are you sure?</ModalHeader>
              <ModalBody>
                <p>you want to remove this post</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={() => {
                  handleRemove();
                  onClose();
                }}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}