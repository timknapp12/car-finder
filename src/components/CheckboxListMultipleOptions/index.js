import React from "react";
import styled from "styled-components";
import { Label, Input } from "../styles/constants";

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
`;

const CheckBoxListMultipleOptions = ({ items, onChange, label = "" }) => {
  return (
    <>
      <Label>{label}</Label>
      <CheckboxWrapper>
        {items.map((item) => (
          <div key={item.id}>
            <Label>
              <Input
                type="checkbox"
                name={item.name}
                value="include"
                checked={item.include === "yes"}
                onChange={onChange}
              />
              Include
            </Label>
            <Label>
              <Input
                type="checkbox"
                name={item.name}
                value="exclude"
                checked={item.include === "no"}
                onChange={onChange}
              />
              Exclude
            </Label>
            <span style={{ marginLeft: "1rem" }}>{item.name}</span>
          </div>
        ))}
      </CheckboxWrapper>
    </>
  );
};

export default CheckBoxListMultipleOptions;
