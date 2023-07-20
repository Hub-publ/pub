import "../style/components/button_ajy.scss";

interface Props {
  text: string;
  shape?: string; // Defualt = rounded | circle(원형) | angular(각형)
  size?: string;
  color?: string;
  width?: string;
  children?: React.ReactNode;
  child_left?: boolean;
  child_right?: boolean;
}

function ButtonAjy(props: Props) {
  const { text, shape, size, color, width, children, child_left, child_right } =
    props;
  return (
    <>
      <button
        type="button"
        className={`btn_ajy ${shape} ${size} ${color} ${width}`}
      >
        {child_left && <>{children}</>}
        {text}
        {child_right && <>{children}</>}
      </button>
    </>
  );
}

export default ButtonAjy;
