import React, { useState, createContext } from "react";

export const DialogueContext = createContext(null);

export const DialogueProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DialogueContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal }}
    >
      {children}
    </DialogueContext.Provider>
  );
};
