import useWidth from "../../function/use_width";

interface Props {
  pd: string;
  mb_pd?: string;
  bg?: string;
  children: React.ReactNode;
}

function MainCard(props: Props) {
  const { device } = useWidth();
  return (
    <>
      <div
        className={`card`}
        style={{ padding: props.pd, backgroundColor: props.bg }}
        // style={{ padding: `${device === "P" ? props.pd : props.mb_pd}` }}
      >
        {props.children}
      </div>
    </>
  );
}

export default MainCard;
