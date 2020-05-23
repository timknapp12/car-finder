import React from "react";
import styled from "styled-components";
import { Label } from "../styles/constants";

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
`;

const CheckBoxListOneOption = ({
  items,
  onChange,
  subject,
  subjectType,
  label = "",
}) => {
  return (
    <>
      <Label>{label}</Label>
      <CheckboxWrapper>
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              name={item.name}
              checked={subject && item.name === subjectType}
              onChange={onChange}
            />
            {item.name}
          </label>
        ))}
      </CheckboxWrapper>
    </>
  );
};

export default CheckBoxListOneOption;
