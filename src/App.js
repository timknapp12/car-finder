import React, { useState } from "react";
import { styles, colors, seats, wheels, additions } from "./mocks";
import styled from "styled-components";
import Home from "./components/Home";
import CheckBoxListOneOption from "./components/CheckBoxListOneOption";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem;
  flex-direction: column;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [style, setStyle] = useState("");
  const [color, setColor] = useState(false);
  const [colorType, setColorType] = useState("");

  const [seat, setSeat] = useState(false);
  const [seatType, setSeatType] = useState("");

  const [wheel, setWheel] = useState(false);
  const [wheelType, setWheelType] = useState("");

  const [addOns, setAddOns] = useState(additions);

  const handleColorChange = (e) => {
    const { checked, name } = e.target;
    setColor(checked);
    if (checked) {
      setColorType(name);
    } else {
      setColorType("");
    }
  };

  const handleSeatChange = (e) => {
    const { checked, name } = e.target;
    setSeat(checked);
    if (checked) {
      setSeatType(name);
    } else {
      setSeatType("");
    }
  };

  const handleWheelChange = (e) => {
    const { checked, name } = e.target;
    setWheel(checked);
    if (checked) {
      setWheelType(name);
    } else {
      setWheelType("");
    }
  };

  const handleAddOns = (e) => {
    const { checked, name, value } = e.target;
    if (checked) {
      setAddOns((state) => {
        const result = state.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              include: value === "include" ? "yes" : "no",
            };
          } else {
            return item;
          }
        });
        return result;
      });
    } else {
      setAddOns((state) => {
        const result = state.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              include: null,
            };
          } else {
            return item;
          }
        });
        return result;
      });
    }
  };

  console.log("colorType", colorType);
  console.log("seatType", seatType);
  console.log("wheelType", wheelType);
  console.log("addOns", addOns);
  return (
    <Wrapper>
      <Home />
      <div>
        <p>{style}</p>
        <label>Searching for:</label>
        <input
          name="style"
          list="styles"
          onChange={(e) => setStyle(e.target.value)}
        />
        <datalist id="styles">
          {styles.map((item) => (
            <option key={item.id} value={item.name} />
          ))}
        </datalist>
      </div>
      <div></div>
      <div>
        Colors
        <CheckBoxListOneOption
          subject={color}
          subjectType={colorType}
          items={colors}
          onChange={handleColorChange}
        />
      </div>
      <div>
        Seats
        <CheckBoxListOneOption
          subject={seat}
          subjectType={seatType}
          items={seats}
          onChange={handleSeatChange}
        />
      </div>
      <div>
        Wheels
        <CheckBoxListOneOption
          subject={wheel}
          subjectType={wheelType}
          items={wheels}
          onChange={handleWheelChange}
        />
      </div>
      <div>
        Additional Equipment
        <CheckboxWrapper>
          {addOns.map((addition) => (
            <div key={addition.id}>
              <label>
                <input
                  type="checkbox"
                  name={addition.name}
                  value="include"
                  checked={addition.include === "yes"}
                  onChange={handleAddOns}
                />
                Include
              </label>
              <label>
                <input
                  type="checkbox"
                  name={addition.name}
                  value="exclude"
                  checked={addition.include === "no"}
                  onChange={handleAddOns}
                />
                Exclude
              </label>
              <span style={{ marginLeft: "1rem" }}>{addition.name}</span>
            </div>
          ))}
        </CheckboxWrapper>
      </div>
    </Wrapper>
  );
}

export default App;
