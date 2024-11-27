import useWidth from "../../function/use_width";
import Tag from "../_common/tag";

interface Props {
  img_size_type: "type_16_9" | "type_4_3";
  img_name: string;
  main_title: string;
  sub_title: string;
  detail_option1?: string;
  detail_option2?: string;
  detail_option3?: string;
  tag?: boolean;
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
          style={{ backgroundImage: `url(/img/${props.img_name})` }}
        ></div>
        <div className="cont_area">
          {props.tag ? (
            <div className="tag_wrap">
              <Tag
                title="Best"
                bg_color="transparent"
                bd_color="tag-bd-red1"
                color="tag-text-red1"
              />
              <Tag
                title="New"
                bg_color="transparent"
                bd_color="tag-bd-blue1"
                color="tag-text-blue1"
              />
              <Tag
                title="귀여움"
                bg_color="transparent"
                bd_color="tag-bd-green1"
                color="tag-text-green1"
              />
            </div>
          ) : (
            <></>
          )}
          {props.main_title ? (
            <h1 className="main_title">
              <span className="ellipsis">{props.main_title}</span>
            </h1>
          ) : (
            <></>
          )}
          {props.sub_title ? (
            <p className="sub_title ellipsis">{props.sub_title}</p>
          ) : (
            <></>
          )}
          {props.detail_option1 ||
          props.detail_option2 ||
          props.detail_option3 ? (
            <ul className="devide_ul">
              {props.detail_option1 ? (
                <li>
                  대견함 : <span>{props.detail_option1}</span>
                </li>
              ) : (
                <></>
              )}
              {props.detail_option2 ? (
                <li>
                  따뜻함 : <span>{props.detail_option2}</span>
                </li>
              ) : (
                <></>
              )}
              {props.detail_option3 ? (
                <li>
                  용감함 : <span>{props.detail_option3}</span>
                </li>
              ) : (
                <></>
              )}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default ProdCard;
