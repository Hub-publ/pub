interface Props {
  className?: string;
  label?: string;
  id: string;
  name: string;
}

function Radio(props: Props) {
  return (
    <div className={`radio ${props.className}`}>
      <input type="radio" name={props.name} id={props.id} />
      <label htmlFor={props.id}>
        <i></i>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

export default Radio;
