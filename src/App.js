import React, { useState } from "react";
import { styles, colors, seats, wheels, additions } from "./mocks";
import styled from "styled-components";
import Home from "./components/Home";

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

  const handleColorChange = async (e) => {
    const { checked, name } = e.target;
    setColor(checked);
    if (checked) {
      setColorType(name);
    } else {
      setColorType("");
    }
  };

  const handleSeatChange = async (e) => {
    const { checked, name } = e.target;
    setSeat(checked);
    if (checked) {
      setSeatType(name);
    } else {
      setSeatType("");
    }
  };

  const handleWheelChange = async (e) => {
    const { checked, name } = e.target;
    setWheel(checked);
    if (checked) {
      setWheelType(name);
    } else {
      setWheelType("");
    }
  };

  // console.log("colorType", colorType);
  // console.log("seatType", seatType);
  // console.log("wheelType", wheelType);
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
        <CheckboxWrapper>
          {colors.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                checked={color && item.name === colorType}
                onChange={handleColorChange}
              />
              {item.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
      <div>
        Seats
        <CheckboxWrapper>
          {seats.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                checked={seat && item.name === seatType}
                onChange={handleSeatChange}
              />
              {item.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
      <div>
        Wheels
        <CheckboxWrapper>
          {wheels.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                checked={wheel && item.name === wheelType}
                onChange={handleWheelChange}
              />
              {item.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
      <div>
        Additional Equipment
        <CheckboxWrapper>
          {additions.map((addition) => (
            <div key={addition.id}>
              <label>
                <input
                  type="radio"
                  name={addition.name}
                  value="include"
                  checked={true}
                />
                Include
              </label>
              <label>
                <input type="radio" name={addition.name} value="exclude" />
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
