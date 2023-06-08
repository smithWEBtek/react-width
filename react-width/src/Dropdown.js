import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

// const useStyles = makeStyles((styleProps) =>
const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      backgroundColor: "white",
      // margin: "8px 0",
      verticalAlign: "middle",
      // width: (styleProps) => styleProps.width,
      "& svg": {
        right: "-2px",
      }
    },
    // menuItem: {
    //   outline: '1px solid red'
    // }
  })
);

const Dropdown = ({ selections }) => {
  const [selection, setSelection] = useState("");
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const selectionWidths = selections.map((selection) => selection.length);
  const maxSelectionWidth = Math.max(...selectionWidths);
  const maxSelectionWidthIndex = selectionWidths.indexOf(maxSelectionWidth);
  const [widestSelection, setWidestSelection] = useState(selections[maxSelectionWidthIndex]);

  // const styleProps = { width: dropdownWidth };
  // const classes = useStyles(styleProps);
  const classes = useStyles();

  const handleDropdownSelect = (event) => {
    event.preventDefault();
    setSelection(event.target.value);
  };

  useEffect(() => {

    const getTextWidth = (text, font) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = font || getComputedStyle(document.body).font;
      const calculatedWidth = context.measureText(text).width;
      console.log('calculatedWidth', calculatedWidth);
      return calculatedWidth + 62;
    };
    
    setDropdownWidth(getTextWidth(widestSelection, null));
    setWidestSelection(selections[maxSelectionWidthIndex]);
  }, []);

  const selectOptions = selections.map((sel, index) => {
    return (
      <MenuItem
        key={`${sel}-${index}`}
        value={sel}
        // id={tile.id}
        // className={classes.menuItem}
      >
        {sel}
      </MenuItem>
    );
  });

  return (
    <FormControl
      style={{ width: dropdownWidth }}
      required
      // className={classes.formControl}
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
