import React, { useState } from "react";
import { styles, colors, seats, wheels, additions } from "./mocks";
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
  const [color, setColor] = useState("");

  console.log("color", color);
  return (
    <Wrapper>
      <div>
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
          {colors.map((color) => (
            <label key={color.id}>
              <input
                type="checkbox"
                name={color.name}
                // checked={color === color.name ? true : false}
                onChange={(e) => setColor(e.target.name)}
              />
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
      <div>
        Additional Equipment
        <CheckboxWrapper>
          {additions.map((addition) => (
            <label key={addition.id}>
              <input type="radio" name={addition.name} />
              {addition.name}
            </label>
          ))}
        </CheckboxWrapper>
      </div>
    </Wrapper>
  );
}

export default App;
