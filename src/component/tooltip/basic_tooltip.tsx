import { useEffect } from "react";

interface Props {
  contents: string;
  right?: boolean;
  top?: boolean;
}

function BasicTooltip(props: Props) {
  const { contents, right, top } = props;

  useEffect(() => {
    window.addEventListener("click", function (event) {
      const clickedElement = event.target as HTMLElement;
      const parentElement = clickedElement.parentNode as HTMLElement;
      if (parentElement) {
        const classes = Array.from(clickedElement.classList);
        if (!classes.some((className) => className.includes("tooltip"))) {
          const btn = document.querySelectorAll(".tooltip_btn");
          for (let i = 0; btn.length > i; i++) {
            const parent = btn[i].parentNode as HTMLElement;
            parent.classList.remove("active");
          }
        } else {
          parentElement.classList.add("active");
        }
      }
    });
  }, []);

  return (
    <>
      <div
        className={`tooltip_wrap ${right ? "right_version" : ""}  ${
          top ? "top_version" : ""
        }`}
      >
        <i className="tooltip_btn"></i>
        <div
          className="tooltip_contents"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </div>
    </>
  );
}

export default BasicTooltip;
