interface Props {
  className?: string;
  children: React.ReactNode;
}

function MorePopup(props: Props) {
  return (
    <div className={`only_more_pop_wrap ${props.className}`}>
      {props.children}
    </div>
  );
}

export default MorePopup;
