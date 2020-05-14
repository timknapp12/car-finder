import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxListOneOption = ({ items, onChange, subject, subjectType }) => {
  return (
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
  );
};

export default CheckBoxListOneOption;
