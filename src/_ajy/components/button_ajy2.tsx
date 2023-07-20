import "../style/components/button_ajy.scss";

interface Props {
  text: string;
  styles?: string;
  children?: React.ReactNode;
  child_left?: boolean;
  child_right?: boolean;
}

function ButtonAjy2(props: Props) {
  const { text, styles, children, child_left, child_right } = props;
  return (
    <>
      <button type="button" className={`btn_ajy ${styles || ""}`}>
        {child_left && <>{children}</>}
        {text}
        {child_right && <>{children}</>}
      </button>
    </>
  );
}

export default ButtonAjy2;
