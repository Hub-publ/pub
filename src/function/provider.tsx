import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useWidth from "./use_width";

interface CeduAuthContextType {
  device2: undefined | "PC" | "IOS" | "AOS";
}

declare const window: any;
const AuthContext = React.createContext<CeduAuthContextType>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const CeduAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [device2, setdevice2] = useState<undefined | "PC" | "IOS" | "AOS">(
    undefined
  );
  const [orientation, setOrientation] = useState<
    undefined | "landscape" | "portrait"
  >(undefined);
  const { device } = useWidth();

  const device2Ref = useRef<undefined | "PC" | "IOS" | "AOS">(undefined);
  const failCount = useRef<number>(1);

  const onChangeOrientation = useCallback((event?: any) => {
    const device2 = device2Ref.current;

    if (device2 === "AOS" || device2 === "IOS") return;
  }, []);

  const device2ManagerGetdevice2 = () => {
    // Native Token Data
    if (
      typeof window.AndroidScript != "undefined" &&
      window.AndroidScript != null
    ) {
      return "AOS";
    } else if (window.webkit && window.webkit.messageHandlers !== null) {
      try {
        window.webkit.messageHandlers.loginRequest.postMessage("getToken");
        return "IOS";
      } catch {}
    }

    return undefined;
  };

  const device2Manager = () => {
    // Native Token Data
    if (
      typeof window.AndroidScript != "undefined" &&
      window.AndroidScript != null
    ) {
      setdevice2("AOS");
      return;
    } else if (window.webkit && window.webkit.messageHandlers !== null) {
      try {
        window.webkit.messageHandlers.loginRequest.postMessage("getToken");
        setdevice2("IOS");
        return;
      } catch {}
    }

    // 가로모드 작업용 설정 변경
    setdevice2("PC");
  };

  useEffect(() => {
    device2Manager();
    onChangeOrientation();
    window.addEventListener("orientationchange", onChangeOrientation); // 모바일 브라우저만 지원

    // Native orientation
    if (
      typeof window.AndroidScript != "undefined" &&
      window.AndroidScript != null
    ) {
      try {
        window.AndroidScript.getScreen();
      } catch {}

      return;
    } else if (window.webkit && window.webkit.messageHandlers !== null) {
      try {
        window.webkit.messageHandlers.screen.postMessage("");
      } catch {}
    }
    const head = document.head;
    const link = document.createElement("link");
    head.appendChild(link);

    return () => {
      window.device2Orientation = null;
      window.removeEventListener("orientationchange", onChangeOrientation); // 모바일 브라우저만 지원
    };
  }, []);

  useEffect(() => {
    if (device2 === undefined || typeof document === "undefined") return;

    const html = document.querySelector("html") as HTMLElement;

    if (device2 === "AOS" || device2 === "IOS") {
      if (!html.classList.contains("mobile")) {
        html.classList.add("mobile");
      }
    } else {
      if (html.classList.contains("mobile")) {
        html.classList.remove("mobile");
      }
    }

    // 1:1 화면 비율의 tablet 여부 체크
    const w = window.innerWidth;
    const h = window.innerHeight;

    const r = w > h ? h / w : w / h;

    if (r > 0.5 && r < 1.5) {
      if (!html.classList.contains("tablet")) {
        html.classList.add("tablet");
      } else {
        if (html.classList.contains("tablet")) {
          html.classList.remove("tablet");
        }
      }
    }

    device2Ref.current = device2;
  }, [device2]);
};
