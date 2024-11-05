import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Header(props: Props) {
  return <header>헤더</header>;
}

export default Header;
