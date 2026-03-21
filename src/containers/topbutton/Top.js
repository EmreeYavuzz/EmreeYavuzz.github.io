import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
      style={{visibility: isVisible ? "visible" : "hidden"}}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
