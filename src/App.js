import React, { useState } from "react";
import { styles, colors, seats, wheels, additions } from "./mocks";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import CheckBoxListOneOption from "./components/CheckBoxListOneOption";
import useDarkMode from "./utils/useDarkMode";
import themes from "./components/styles/themes";
import DataList from "./components/DataList";
import CheckBoxListMultipleOptions from "./components/CheckboxListMultipleOptions";

function App() {
  const [style, setStyle] = useState("");
  const [color, setColor] = useState(false);
  const [colorType, setColorType] = useState("");

  const [seat, setSeat] = useState(false);
  const [seatType, setSeatType] = useState("");

  const [wheel, setWheel] = useState(false);
  const [wheelType, setWheelType] = useState("");

  const [addOns, setAddOns] = useState(additions);

  const theme = useDarkMode() ? themes.dark : themes.light;

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

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <DataList
          items={styles}
          item={style}
          label="Searching for:"
          onChange={(e) => setStyle(e.target.value)}
        />
        <CheckBoxListOneOption
          label="Colors"
          subject={color}
          subjectType={colorType}
          items={colors}
          onChange={handleColorChange}
        />
        <CheckBoxListOneOption
          label="Seats"
          subject={seat}
          subjectType={seatType}
          items={seats}
          onChange={handleSeatChange}
        />
        <CheckBoxListOneOption
          label="Wheels"
          subject={wheel}
          subjectType={wheelType}
          items={wheels}
          onChange={handleWheelChange}
        />
        <CheckBoxListMultipleOptions
          items={addOns}
          onChange={handleAddOns}
          label="Additional Equipment"
        />
      </Home>
    </ThemeProvider>
  );
}

export default App;
