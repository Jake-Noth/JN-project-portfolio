import { useState, useEffect } from "react";

export default function FullPageScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll(event) {
      if (isScrolling) return;

      const windowHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY;

      setIsScrolling(true);

      // Simulate animation with a delay
      setTimeout(() => {
        console.log("playing animation");
      }, 300000); // Duration of your simulated animation

      if (event.deltaY > 0) {
        // Scrolling down
        window.scrollTo({
          top: currentScrollPosition + windowHeight,
          behavior: "smooth",
        });
      } else if (event.deltaY < 0) {
        // Scrolling up
        window.scrollTo({
          top: currentScrollPosition - windowHeight,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1200); // Duration should be longer than smooth scroll duration
    }

    document.addEventListener("wheel", handleScroll);

    return () => document.removeEventListener("wheel", handleScroll);
  }, [isScrolling]);
}
