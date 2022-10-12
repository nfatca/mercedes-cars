import "./Main.scss";
import Data from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {Data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
