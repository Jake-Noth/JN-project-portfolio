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

  export function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener("touchmove", preventDefault, wheelOpt);
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }