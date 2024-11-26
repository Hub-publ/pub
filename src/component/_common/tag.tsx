interface Props {
  className?: string;
  title: string;
  bg_color: string;
  bd_color: string;
  color: string;
}

function Tag(props: Props) {
  return (
    <span
      className={`tag ${props.className}`}
      style={{
        backgroundColor: `var(--${props.bg_color})`,
        borderColor: `var(--${props.bd_color})`,
        color: `var(--${props.color})`,
      }}
    >
      {props.title}
    </span>
  );
}

export default Tag;
