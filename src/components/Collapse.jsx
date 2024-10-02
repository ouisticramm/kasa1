import "../assets/sass/Components/Collapse.scss";
import { useState } from "react";
import ArrowUp from "../assets/images/ArrowUp.svg";
import ArrowDown from "../assets/images/ArrowDown.svg";

function Collapse({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible((prev) => !prev);
  };

  console.log("Contenu : ", content);

  const contentClass =
    (isContentVisible ? "visible" : "hidden") + " about_describe";

  return (
    <div className="collapse-describe">
      <div className="description" onClick={toggleContent}>
        <span>{title}</span>
        <img
          src={isContentVisible ? ArrowUp : ArrowDown}
          alt="Toggle content visibility"
        />
      </div>
      {isContentVisible && <p className={contentClass}>{content}</p>}
    </div>
  );
}

export default Collapse;
