interface Props {
  title: string;
  size: "h_44" | "h_38" | "h_32" | "h_28";
  color: "black" | "black_line" | "blue" | "blue_line" | "green" | "green_line";
  className?: string;
}

function Button(props: Props) {
  return (
    <button type="button" className={`btn ${props.size} ${props.color} `}>
      {props.title}
    </button>
  );
}

export default Button;
