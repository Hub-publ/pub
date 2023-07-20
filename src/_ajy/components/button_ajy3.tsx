import "../style/components/button_ajy3.scss";

interface Props {
  label: string;
  styleClass?: string;
  disabled?: boolean;
}

function ButtonAjy3(props: Props) {
  const { label, styleClass, disabled } = props;
  return (
    <>
      <div>
        <button
          type="button"
          //className={`btn_ajy3 ${styleClass}`}
          className={styleClass}
          disabled={disabled}
        >
          {label}
        </button>
      </div>
    </>
  );
}

export default ButtonAjy3;
