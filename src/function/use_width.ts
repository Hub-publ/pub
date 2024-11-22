import { useState, useEffect } from "react";
import { PlatformType } from "./types";
import { useAuth } from "./provider";

const useWidth = () => {
  const loginManager = useAuth();

  const [width, setWidth] = useState(window.innerWidth);

  const platform: PlatformType =
    width > 1024 && (loginManager?.device2 ?? "PC") === "PC" ? "P" : "M";

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    w: width,
    device: platform,
  };
};

export default useWidth;
