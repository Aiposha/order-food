import styled from "styled-components";
import { MealItem } from "./MealItem";
import { useState } from "react";

export const Meals = ({ meals }) => {
  return (
    <StyledSection>
      <ul>
        {meals.map((item) => (
          <MealItem key={item.id} {...item} meals={meals} />
        ))}
      </ul>
    </StyledSection>
  );
};

const StyledSection = styled("section")`
  width: 65%;
  height: 100%;
  background: #fff;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    :not(:last-of-type) {
      border-bottom: 2px solid #d6d6d6;
    }
  }
`;
