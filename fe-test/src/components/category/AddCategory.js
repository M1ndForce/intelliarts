import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";

const AddCategory = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function inputOnchangeHandler(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "price") {
      setPrice(e.target.value);
    }
    if (e.target.id === "count") {
      setCount(e.target.value);
    }
  }
  function changeToggleToFalse() {
    setError(null);
    setResponse(null);
    return setToggle(false);
  }

  const addBtnHandler = (e) => {
    axios
      .post("/categories", {
        name: name,
        price: +price,
        count: +count,
      })
      .then((res) => {
        setName("");
        setPrice("");
        setCount("");
        setToggle(true);
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
        id={"name"}
        onChange={inputOnchangeHandler}
      />
      <Input
        text={"PRICE"}
        value={price}
        id={"price"}
        onChange={inputOnchangeHandler}
      />
      <Input
        text={"COUNT"}
        value={count}
        id={"count"}
        onChange={inputOnchangeHandler}
      />
      <Button text={"AddCategory"} onclick={addBtnHandler} />
    </div>
  );
};

export default AddCategory;
