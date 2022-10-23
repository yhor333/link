import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CubeBlack() {
  const href = window.location.href;
  const [path, setPath] = useState("black");
  useEffect(() => {
    if (href === "http://localhost:3001/black") {
      setPath("");
    }
  }, [href]);
  return (
    <div className="App">
      <div className="product__img-wrapper">
        <img
          src="https://img.freepik.com/premium-vector/realistic-black-cube-or-box-isolated_1085-2058.jpg"
          alt="white cube"
        ></img>
      </div>
      <div className="product__info">
        <h1>White cube</h1>
        <span>$299.00 USD</span>
        <p>color</p>
        <div className="product__colors">
          <Link to={`${path}`}>
            <span className="product__black-link" />
          </Link>
          <Link to="/">
            <span className="product__white-link" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CubeBlack;
