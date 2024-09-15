import { useEffect } from "react";
import NavSpacer from "./NavSpacer";
import { disableScroll } from "../full_page_scroll/DisableScrolling";
import FullPageScroll from "../full_page_scroll/FullPageScroll";

export default function Section({ id, img, children }) {
  // Use the custom hook
  FullPageScroll();

  useEffect(() => {
    
    disableScroll();

  }, []);

  return (
    <section
      id={id}
      className="section"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavSpacer />
      {children}
    </section>
  );
}
