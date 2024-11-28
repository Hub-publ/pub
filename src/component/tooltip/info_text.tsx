interface Props {
  contents: string;
  size: string;
}

function InfoText(props: Props) {
  const { contents } = props;

  return (
    <p
      className="info_text"
      style={{ fontSize: `var(--text-tooltip-${props.size})` }}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
}

export default InfoText;
