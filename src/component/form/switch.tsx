interface Props {
  className?: string;
  id: string;
}

function Switch(props: Props) {
  return (
    <div className={`switch ${props.className}`}>
      <input type="checkbox" name="switch" id={props.id} />
      <label htmlFor={props.id}>
        <i></i>
      </label>
    </div>
  );
}

export default Switch;
