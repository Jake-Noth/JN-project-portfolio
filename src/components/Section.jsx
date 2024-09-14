import { useEffect } from "react";
import NavSpacer from "./NavSpacer";

export default function Section({ id, img, children }) {
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener("touchmove", preventDefault, wheelOpt);
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  disableScroll();

  let isScrolling = false;

  useEffect(() => {
    function handleScroll(event) {
      if (isScrolling) return;

      const windowHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY;

      isScrolling = true;

      if (event.deltaY > 0) {
        // Scrolling down
        window.scrollTo({
          top: currentScrollPosition + windowHeight + 3,
          behavior: "smooth",
        });
      } else if (event.deltaY < 0) {
        // Scrolling up
        window.scrollTo({
          top: currentScrollPosition - windowHeight - 3,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 1200);
    }

    document.addEventListener("wheel", handleScroll);

    return () => document.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <section
      id={id}
      className="section"
      style={{
        backgroundImage: `url(${img})`, // Dynamically set background image
        backgroundRepeat: "no-repeat",   // No repeat of background image
        backgroundSize: "cover",         // Make the image cover the section
        backgroundPosition: "center",    // Center the image
      }}
    >
      <NavSpacer />
      {children}
    </section>
  );
}
