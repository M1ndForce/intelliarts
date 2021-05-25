import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";

const AddPurchase = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function inputOnchangeHandler(e) {
    if (e.target.id === "itemNameForPurchase") {
      setName(e.target.value);
    }
    if (e.target.id === "date") {
      setDate(e.target.value);
    }
  }
  function changeToggleToFalse() {
    setError(null);
    setResponse(null);
    return setToggle(false);
  }

  const addItemBtnHandler = (e) => {
    axios
      .post("/purchases", {
        name: name,
        date: date,
      })
      .then((res) => {
        setToggle(true);
        setName("");
        setDate("");
        if (res?.data?.name) {
          setResponse(res.data);
          setTimeout(changeToggleToFalse, 5000);
        } else {
          setError(res?.data.message);
          setTimeout(changeToggleToFalse, 5000);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="child">
      {toggle ? (
        <h2>
          {response?.date} {response?.name} {response?.price} {error}
        </h2>
      ) : null}
      <Input
        text={"NAME"}
        value={name}
        id={"itemNameForPurchase"}
        onChange={inputOnchangeHandler}
      />
      <Input
        text={"DATE"}
        value={date}
        id={"date"}
        onChange={inputOnchangeHandler}
      />
      <Button text={"purchase"} onclick={addItemBtnHandler} />
    </div>
  );
};

export default AddPurchase;
