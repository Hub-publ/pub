import { useEffect, Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  popup: Number | undefined;
  setPopup: Dispatch<SetStateAction<number | undefined>>;
  className?: string;
}

function PopupManage(props: Props) {
  const popSizeHandler = () => {
    const pop_wrap = document.querySelectorAll(".pop_wrap");
    let popup_height;
    let pop_top_height;
    let pop_btns_height;
    let pop_top_mb;
    let pop_btns_mt;
    for (let a = 0; pop_wrap.length > a; a++) {
      const pop_top = pop_wrap[a].querySelector(".pop_top") as HTMLElement;
      const pop_btns = pop_wrap[a].querySelector(".pop_btns") as HTMLElement;
      const scroll_area = pop_wrap[a].querySelector(
        ".popup_scroll_area"
      ) as HTMLElement;
      if (pop_wrap) {
        const computedStyle = window.getComputedStyle(pop_wrap[a]);
        popup_height = parseFloat(computedStyle.height);
      }
      if (pop_top) {
        const computedStyle = window.getComputedStyle(pop_top);
        pop_top_height = parseFloat(computedStyle.height);
        pop_top_mb = parseFloat(computedStyle.marginBottom);
      }
      if (pop_btns) {
        const computedStyle = window.getComputedStyle(pop_btns);
        pop_btns_height = parseFloat(computedStyle.height);
        pop_btns_mt = parseFloat(computedStyle.marginTop);
      }
      if (
        popup_height &&
        pop_top_height &&
        pop_top_mb &&
        pop_btns_height &&
        pop_btns_mt
      ) {
        if (pop_wrap[a].classList.contains("side")) {
          scroll_area.style.maxHeight = `${
            popup_height -
            pop_top_height -
            pop_btns_height -
            pop_top_mb -
            pop_btns_mt
          }px`;
        } else {
          scroll_area.style.maxHeight = `${
            popup_height -
            pop_top_height -
            pop_btns_height -
            pop_top_mb -
            pop_btns_mt -
            100
          }px`;
        }
      }
    }
  };
  useEffect(() => {
    console.log(props.popup);
    popSizeHandler();
    window.addEventListener("resize", popSizeHandler);
    return () => {
      window.removeEventListener("resize", popSizeHandler);
    };
  }, [props.popup]);

  return (
    <div className={`pop_wrap ${props.className}`}>
      <div
        className="pop_dim"
        onClick={() => {
          if (props.setPopup) props.setPopup(undefined);
        }}
      ></div>
      <div className="pop_contents">
        <div className="pop_top">
          <p className="pop_title">{props.title}</p>
          <button
            className="pop_x"
            onClick={() => {
              if (props.setPopup) props.setPopup(undefined);
            }}
          ></button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default PopupManage;
