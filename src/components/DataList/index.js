import React from "react";
import { Label, P, Input } from "../styles/constants";

const DataList = ({ items = [], label, item, onChange = () => {} }) => {
  return (
    <div>
      <P>{item}</P>
      <Label>{label}</Label>
      <Input name="style" list="styles" onChange={onChange} />
      <datalist id="styles">
        {items.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
    </div>
  );
};

export default DataList;
