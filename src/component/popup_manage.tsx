import Button from "./form/button";

interface Props {
  className?: string;
}

function PopupManage(props: Props) {
  return (
    <div className={`pop_wrap ${props.className}`}>
      <div className="pop_dim"></div>
      <div className="pop_contents">
        <div className="pop_top">
          <p className="pop_title">타이틀이 들어가는 영역입니다.</p>
          <button className="pop_x"></button>
        </div>
        <div className="pop_cont">팝업의 내용이 여기에 들어갑니다.</div>
        <div className="pop_btns">
          <Button size="h_38" color="black_line" title="닫기" />
          <Button size="h_38" color="black" title="완료" />
        </div>
      </div>
    </div>
  );
}

export default PopupManage;
