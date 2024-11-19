interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  transparent?: boolean;
}

function CommonDim(props: Props) {
  return (
    <div
      className={`common_dim ${props.className} ${
        props.transparent && "transparent"
      }`}
      onClick={props.onClick}
    ></div>
  );
}

export default CommonDim;
