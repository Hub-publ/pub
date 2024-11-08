interface Props {
  className?: string;
  label?: string;
  id: string;
}

function Checkbox(props: Props) {
  return (
    <div className={`checkbox ${props.className}`}>
      <input type="checkbox" name="checkbox" id={props.id} />
      <label htmlFor={props.id}>
        <i></i>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
