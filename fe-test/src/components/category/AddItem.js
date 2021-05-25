import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import "./Category.css";

const AddItem = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  function inputOnchangeHandler(e) {
    if (e.target.id === "itemName") {
      setName(e.target.value);
    }
    if (e.target.id === "itemCount") {
      setCount(e.target.value);
    }
  }
  function changeToggleToFalse() {
    setError("");
    setResponse("");
    return setToggle(false);
  }

  const addItemBtnHandler = (e) => {
    axios
      .put("/categories", {
        name: name,
        count: +count,
      })
      .then((res) => {
        setToggle(true);
        setName("");
        setCount("");
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
          {response?.name} {response?.price} {response?.count} {error}
        </h2>
      ) : null}
      <Input
        text={"NAME"}
        value={name}
        id={"itemName"}
        onChange={inputOnchangeHandler}
      />
      <Input
        text={"COUNT"}
        value={count}
        id={"itemCount"}
        onChange={inputOnchangeHandler}
      />
      <Button text={"AddItem"} onclick={addItemBtnHandler} />
    </div>
  );
};

export default AddItem;
