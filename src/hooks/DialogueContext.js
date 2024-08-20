import React, { useState, createContext } from "react";

export const DialogueContext = createContext(null);

export const DialogueProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [buttonType, setButtonType] = useState("");

  const openModal = (modalType, buttonType) => {
    setModalOpen(true);
    setModalType(modalType);
    setButtonType(buttonType);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DialogueContext.Provider
      value={{ isModalOpen, modalType, buttonType, openModal, closeModal }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
