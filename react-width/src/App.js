import ButtonWithTooltip from "./ButtonWithTooltip.js";
import Dropdown from "./Dropdown.js";

const selections = [
  [
    "a very very very very very very long select option",
    "a very very very very very very long select option which is really very much significantly a lot longer",
    "a very long select option",
    "cat",
    "fish",
    "snake",
    "vegetarian",
  ],
  ["43degrees", "20", "cat"],
  ["x", "y", "z"],
];

export default function App() {
  const selectionDropdowns = selections.map((selectionGroup, i) => {
    return (
      <div key={i}>
        <Dropdown selections={selectionGroup} />
        <br />
        <br />
        <br />
      </div>
    );
  });

  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <h2>Unique widths for unique selection groups</h2>
      {selectionDropdowns}
      <br />
    </div>
  );
}
