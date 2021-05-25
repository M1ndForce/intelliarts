import Button from "../../components/button/Button";
import axios from "axios";
import React, { useState } from "react";
import Input from "../input/Input";

const CreateReport = ({ rout, name }) => {
  axios.defaults.baseURL = "http://localhost:5000";
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState("");

  function inputOnchangeHandler(e) {
    setDate(e.target.value);
  }

  function changeToggleToFalse() {
    setError("");
    return setToggle(false);
  }

  const addItemBtnHandler = (e) => {
    axios.get(`${rout}${date}`).then((res) => {
      setData([]);
      if (res.data.message) {
        setError(res.data.message);
        setToggle(true);
        setTimeout(changeToggleToFalse, 5000);
      } else {
        setData(res.data);
        setToggle(true);
        setTimeout(changeToggleToFalse, 5000);
      }
    });
    e.preventDefault();
  };

  return (
    <div className="child">
      {toggle ? <h2>{error}</h2> : null}
      <Input
        text={"DATE"}
        value={date}
        id={name}
        onChange={inputOnchangeHandler}
      />
      <Button text={name} onclick={addItemBtnHandler} />
      {data.map((e, index) => {
        if (e?.totalPriceSum) {
          return <li key={index}> total {e.totalPriceSum}</li>;
        }
        if (e?.totalPriceSum === 0) {
          return <li key={index}> total {e.totalPriceSum}</li>;
        } else {
          return (
            <li key={index}>
              {e?.name} {e?.totalPrice} {e?.soldItemsCount}{" "}
            </li>
          );
        }
      })}
    </div>
  );
};

export default CreateReport;
