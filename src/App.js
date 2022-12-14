import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="product__img-wrapper">
        <img
          src="https://img.freepik.com/premium-vector/white-cube-square-box-illustration_275806-771.jpg"
          alt="white cube"
        ></img>
      </div>
      <div className="product__info">
        <h1>White cube</h1>
        <span>$299.00 USD</span>
        <p>color</p>
        <div className="product__colors">
          <Link to="black">
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

export default App;
