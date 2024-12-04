export interface Props {
  title: string;
  size: "h_44" | "h_38" | "h_32" | "h_28";
  bg_color: string;
  bd_color: string;
  color: string;
  // color:
  //   | "black"
  //   | "black_line"
  //   | "blue"
  //   | "blue_line"
  //   | "green"
  //   | "green_line"
  //   | "gray_bg_line";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: Props) {
  return (
    <button
      type="button"
      className={`btn ${props.size}`}
      style={{
        backgroundColor: `var(--${props.bg_color})`,
        borderColor: `var(--${props.bd_color})`,
        color: `var(--${props.color})`,
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
