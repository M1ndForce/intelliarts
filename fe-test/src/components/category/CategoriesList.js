import Button from "../../components/button/Button";
import axios from "axios";
import "./Category.css";
import { useState } from "react";

const CategoriesList = () => {
  axios.defaults.baseURL = "http://localhost:5000";
  const [data, setData] = useState([]);

  const addItemBtnHandler = (e) => {
    axios.get("/categories").then((res) => {
      setData(res.data);
    });
    e.preventDefault();
  };

  return (
    <div className="child">
      <Button text={"List"} onclick={addItemBtnHandler} />
      {data.map((e) => {
        return (
          <li key={e._id}>
            {e?.name} {e?.price} {e?.count}{" "}
          </li>
        );
      })}
    </div>
  );
};

export default CategoriesList;
