import Tag from "../_common/tag";

interface Props {
  img_name: string;
  main_title: string;
  sub_title: string;
  tag_title: string;
  tag_bg_color: string;
  tag_bd_color: string;
  tag_color: string;
  detail_option1?: string;
  detail_option2?: string;
  detail_option3?: string;
  square_type?: boolean;
  children: React.ReactNode;
}

function RowCard(props: Props) {
  return (
    <>
      <div className={`card row ${props.square_type ? "img_square_type" : ""}`}>
        <div
          className={`img_area`}
          style={{ backgroundImage: `url(/img/${props.img_name})` }}
        ></div>
        <div className="cont_area">
          {props.main_title ? (
            <h1 className="main_title ellipsis">
              <Tag
                title={props.tag_title}
                bg_color={props.tag_bg_color}
                bd_color={props.tag_bd_color}
                color={props.tag_color}
                // bg_color="transparent"
                // bd_color="tag-bd-red1"
                // color="tag-text-red1"
              />
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
            <ul className="detail_option">
              {props.detail_option1 ? (
                <li>
                  장난끼 : <span>{props.detail_option1}</span>
                </li>
              ) : (
                <></>
              )}
              {props.detail_option2 ? (
                <li>
                  진지함 : <span>{props.detail_option2}</span>
                </li>
              ) : (
                <></>
              )}
              {props.detail_option3 ? (
                <li>
                  어른스러움 : <span>{props.detail_option3}</span>
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

export default RowCard;
