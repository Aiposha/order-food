import { createContext, useState } from "react";

export const modalContext = createContext({
  isModalOpen: false,
  isAddMealOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const AddMealOpenHandler = () => {
    setIsAddMealOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddMealOpen(false);
  };

  return (
    <modalContext.Provider
      value={{
        isModalOpen,
        isAddMealOpen,
        AddMealOpenHandler,
        openModal,
        closeModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};
