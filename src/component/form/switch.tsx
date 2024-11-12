import { ChangeEvent } from "react";

interface Props {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

function Switch(props: Props) {
  return (
    <div className={`switch ${props.className}`}>
      <input
        type="checkbox"
        name="switch"
        id={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>
        <i></i>
      </label>
    </div>
  );
}

export default Switch;
