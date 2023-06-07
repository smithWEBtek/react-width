import ButtonWithTooltip from "./ButtonWithTooltip.js";
import Dropdown from "./Dropdown.js";

const selections1 = [
  "a very very very very very very long select option",
  "a very long select option",
  "cat",
  "fish",
  "snake",
  "vegetarian",
];
const selections2 = [
  '43degrees',
  '20',
  'cat'
];

export default function App() {
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
      <br />
      <br />
      <br />
      <br />
      <label>selection1</label>
      <br />
      <Dropdown selections={selections1} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label>selection2</label>
      <br />
      <Dropdown selections={selections2} />
      <br />
    </div>
  );
}
