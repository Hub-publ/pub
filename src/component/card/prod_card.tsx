import useWidth from "../../function/use_width";

interface Props {
  mb_pd?: string;
  img_size_type: "type_16_9" | "type_4_3";
  children: React.ReactNode;
}

function ProdCard(props: Props) {
  const { device } = useWidth();
  return (
    <>
      <div
        className={`card prod`}
        // style={{ padding: `${device === "P" ? props.pd : props.mb_pd}` }}
      >
        <div
          className={`img_area ${props.img_size_type}`}
          style={{ backgroundImage: "url(/img/img_test.jpg)" }}
        ></div>
        <div className="cont_area">{props.children}</div>
      </div>
    </>
  );
}

export default ProdCard;
