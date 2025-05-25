import Image from "react-bootstrap/Image";
import img404 from "../assets/cat-404.png";

export const NotFound = () => {
  return (
      <div className="d-flex flex-column align-items-center gap-1">
        <span style={{ fontSize: "7rem" }}>404</span>
        <span style={{ fontSize: "2rem" }}>ИЗВИНИТЕ, ЗАПРАШИВАЕМАЯ СТРАНИЦА НЕ НАЙДЕНА</span>
        <Image src={img404} />
      </div>
  );
};
