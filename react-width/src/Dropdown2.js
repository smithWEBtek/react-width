import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { FormControl, Select, MenuItem } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme: Theme) =>
const useStyles = makeStyles((styleProps) =>
  createStyles({
    formControl: {
      outline: "1px solid red",
      backgroundColor: "white",
      // margin: "8px 0",
      verticalAlign: "middle",
      // width: (styleProps) => styleProps.width,
      "& svg": {
        right: "-2px",
      },
    },
    portal: {
      border: "3px solid green",
      // visibility: "hidden",
    },
  })
);

const Dropdown = ({ selections }) => {
  const dropdownRef = useRef(null);
  const [selection, setSelection] = useState("");
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const styleProps = { width: dropdownWidth };
  const classes = useStyles(styleProps);

  const handleDropdownSelect = (event) => {
    event.preventDefault();
    setSelection(event.target.value);
  };

  const selectionWidths = selections.map((selection) => selection.length);
  const maxSelectionWidth = Math.max(...selectionWidths);
  const maxSelectionWidthIndex = selectionWidths.indexOf(maxSelectionWidth);
  const [widestSelection,setWidestSelection] = useState(null);

  // useLayoutEffect(() => {
  //   const { width } = dropdownRef.current.getBoundingClientRect();
  //   setDropdownWidth(width);
  //   console.log("width: ", width);
  // }, []);
  
  useEffect(() => {
    const { width } = dropdownRef.current.getBoundingClientRect();
    setDropdownWidth(width);
    setWidestSelection(selections[maxSelectionWidthIndex])
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
    <>
      <div
        id="dropdownselectportal"
        className={classes.portal}
        ref={dropdownRef}
        >
        {createPortal(widestSelection, document.body)}
      </div>
      <FormControl
        style={{ width: dropdownWidth }}
        required
        className={`${classes.formControl}`}
        variant="outlined"
      >
        <Select
          id={"123"}
          labelId="answer-select"
          data-testid="answer-select"
          value={selection}
          onChange={handleDropdownSelect}
          // className={
          //   minHeight !== "auto" ? `${classes.fractionSelectionHeight}` : null
          // }
        >
          {selectOptions}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
