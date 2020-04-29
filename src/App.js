import React, { useState } from "react";
import { styles, colors, seats, wheels } from "./mocks";
import styled from "styled-components";

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
  console.log("style", style);
  return (
    <Wrapper>
      <div>
        <label>Choose a style</label>
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
        Searching for: {style}
      </div>
      <div></div>
      <div>
        Colors
        <CheckboxWrapper>
          {colors.map((color) => (
            <label key={color.id}>
              <input type="checkbox" name={color.name} />
              {color.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
      <div>
        Seats
        <CheckboxWrapper>
          {seats.map((seat) => (
            <label key={seat.id}>
              <input type="checkbox" name={seat.name} />
              {seat.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
      <div>
        Wheels
        <CheckboxWrapper>
          {wheels.map((wheel) => (
            <label key={wheel.id}>
              <input type="checkbox" name={wheel.name} />
              {wheel.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
    </Wrapper>
  );
}

export default App;
