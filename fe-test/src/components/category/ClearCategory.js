import Button from "../../components/button/Button";
import axios from "axios";
import "./Category.css";
import { useState } from "react";

const CategoriesClear = () => {
  axios.defaults.baseURL = "http://localhost:5000";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const addItemBtnHandler = (e) => {
    axios.delete("/categories").then((res) => {
      if (res?.data?.message) {
        setError(res?.data?.message);
      } else {
        setData(res.data);
        setError(false);
      }
    });
    e.preventDefault();
  };

  return (
    <div className="child">
      <Button text={"Clear"} onclick={addItemBtnHandler} />
      {error ? (
        <li>{error}</li>
      ) : (
        data.map((e) => {
          return (
            <li key={e._id}>
              {e?.name} {e?.price} {e?.count}{" "}
            </li>
          );
        })
      )}
    </div>
  );
};

export default CategoriesClear;
