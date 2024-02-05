import React, { useContext, useState } from "react";
import { modalContext } from "../../context/modal-context";
import { Modal } from "../UI/Modal";
import styled from "styled-components";
import { Button } from "../UI/Button";

const AddMeals = ({onAddNewMeal}) => {
  const { closeModal } = useContext(modalContext);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const handleNewMeal = (event) => {
  event.preventDefault()
  setTitle("")
  setDescription("")
  setPrice("")
  }
 const handleaddButton = () => {
  const newMeal= {
    title,
    description,
    price,
    id: Date.now().toString()
  }
  onAddNewMeal(newMeal)
 }
 
  return (
    <Modal closeModal={closeModal}>
      <StyledFormInput onSubmit={handleNewMeal}>
        <input type="text"  
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
        />
        <input type="text"
         value={description}
         onChange={(e) => setDescription(e.target.value)} />
        <input type="number"
         value={price}
         onChange={(e) => setPrice(e.target.value)} />

        <div>
          <Button onClick={handleaddButton}>
            ADD
          </Button>
          <Button onClick={closeModal}>CLOSE</Button>
        </div>
      </StyledFormInput>
    </Modal>
   
  );
};

const StyledFormInput = styled("form")`

  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  
  input{
    width: 60%;
   height: 50px;

  }
`;



export default AddMeals;
