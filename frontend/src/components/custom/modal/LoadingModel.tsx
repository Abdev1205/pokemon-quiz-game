import React from "react";
import Modal, { ChildModalProps } from ".";
import LoadingAnimation from "@/components/animation/loadingAnimation";

const LoadingModel: React.FC<ChildModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className=" w-[15rem] p-5 rounded-lg">
        <LoadingAnimation />
      </div>
    </Modal>
  );
};

export default LoadingModel;
