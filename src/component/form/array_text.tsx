interface Props {
  className?: string;
  text: Array<string | JSX.Element>;
}

function ArrayText(props: Props) {
  return (
    <>
      <ul className="devide_ul">
        {props.text.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default ArrayText;
