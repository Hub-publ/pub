interface Props {
  contents: string;
  size: string;
  color: string;
}

function InfoText(props: Props) {
  const { contents } = props;

  return (
    <p
      className="info_text"
      style={{
        fontSize: `var(--text-tooltip-${props.size})`,
        color: `var(--text-${props.color})`,
      }}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
}

export default InfoText;
