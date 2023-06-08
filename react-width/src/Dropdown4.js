import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((styleProps) =>
  createStyles({
    formControl: {
      backgroundColor: "white",
      verticalAlign: "middle",
      // width: (styleProps) => styleProps.width,
      "& svg": {
        right: "-2px",
      },
    },
  })
);

const Dropdown = ({ selections }) => {
  const ref = useRef(null);
  const [selection, setSelection] = useState("");
  const maxSelectionLength = Math.max(...selections.map(s => s.length))
  const widthFactor = maxSelectionLength < 51 ? 8 : 1;
  // const [dropdownWidth, setDropdownWidth] = useState(maxSelectionLength + widthFactor);
  const [dropdownWidth, setDropdownWidth] = useState(maxSelectionLength);
  const styleProps = {width: dropdownWidth};
  const classes = useStyles(styleProps);

  const handleDropdownSelect = (event) => {
    event.preventDefault();
    setSelection(event.target.value);
  };

  useLayoutEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setDropdownWidth(width * widthFactor);
  }, []);

  const selectOptions = selections.map((sel, index) => {
    return (
      <MenuItem
        key={`${sel}-${index}`}
        value={sel}
        // id={tile.id}
      >
        {sel}
      </MenuItem>
    );
  });

  return (
    <FormControl
      ref={ref}
      required
      className={`${classes.formControl}`}
      style={{ width: dropdownWidth}}
      variant="outlined"
    >
      <Select
        id={"123"}
        labelId="answer-select"
        data-testid="answer-select"
        value={selection}
        onChange={handleDropdownSelect}
      >
        {selectOptions}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
